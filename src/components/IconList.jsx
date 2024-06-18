/* eslint-disable react/prop-types */
import { useReducer } from "react";
import { useUpdateStorage } from "../context/UpdateStorageContext";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "../components/ui/dialog";
import { Button } from "./ui/button";
import { iconOBJ } from "../constants/icons";
import { icons } from "lucide-react";
import { cn } from "../lib/utils";

const initialState = {
  currentPage: 0,
  open: false,
  iconData: iconOBJ,
  selectedIcon: "",
  iconsPerPage: 56,
};

const actionTypes = {
  SET_ICON: "SET_ICON",
  SET_OPEN: "SET_OPEN",
  SET_PAGE: "SET_PAGE",
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_ICON:
      return { ...state, selectedIcon: payload };

    case actionTypes.SET_OPEN:
      return { ...state, open: payload };

    case actionTypes.SET_PAGE:
      return { ...state, currentPage: payload };

    default:
      throw new Error(`Unhandled action type: ${type}`);
  }
};

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const Icon = ({ name, size, color }) => {
  const LucidIcon = icons[name];
  if (!LucidIcon) return null;

  return <LucidIcon size={size} color={color} />;
};

const IconList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { storage, updateStorage } = useUpdateStorage();

  const iconChunks = chunkArray(state.iconData, state.iconsPerPage);

  const handleChooseIcon = () => {
    updateStorage({ icon: state.selectedIcon });
    dispatch({ type: actionTypes.SET_OPEN, payload: false });
  };

  return (
    <Dialog
      open={state.open}
      onOpenChange={() =>
        dispatch({ type: actionTypes.SET_OPEN, payload: !state.open })
      }
    >
      <DialogTrigger asChild>
        <Button className="my-2 flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-md p-3">
          <Icon size={30} color={"#000"} name={storage.icon} />
        </Button>
      </DialogTrigger>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="text-xl font-bold">
                Pick your favorite Icon
              </DialogTitle>
              <DialogDescription className="!mt-10 grid h-[400px] w-full grid-cols-8 grid-rows-7 gap-3 overflow-auto">
                {iconChunks[state.currentPage]?.map((icon, index) => (
                  <span
                    key={index}
                    className={cn(
                      "flex items-center justify-center rounded-md bg-gray-100 p-1 hover:bg-gray-500",
                      state.selectedIcon === icon && "bg-gray-900",
                      storage.icon === icon && "bg-gray-900",
                    )}
                    onClick={() =>
                      dispatch({ type: actionTypes.SET_ICON, payload: icon })
                    }
                  >
                    <Icon
                      size={30}
                      color={state.selectedIcon === icon ? "#fff" : "#000"}
                      name={icon}
                    />
                  </span>
                ))}
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="!flex w-full !items-center !justify-between">
              {iconChunks.length > 1 && (
                <div className="flex justify-center space-x-2">
                  <Button
                    variant="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SET_PAGE,
                        payload: Math.max(state.currentPage - 1, 0),
                      })
                    }
                    disabled={state.currentPage === 0}
                    className="rounded-md px-4 py-2 disabled:opacity-20"
                  >
                    Previous
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() =>
                      dispatch({
                        type: actionTypes.SET_PAGE,
                        payload: Math.min(
                          state.currentPage + 1,
                          iconChunks.length - 1,
                        ),
                      })
                    }
                    disabled={state.currentPage === iconChunks.length - 1}
                    className="rounded-md px-4 py-2 disabled:opacity-20"
                  >
                    Next
                  </Button>
                </div>
              )}
              <div className="flex justify-center space-x-2">
                <Button
                  type="button"
                  variant="default"
                  onClick={handleChooseIcon}
                >
                  Choose
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() =>
                    dispatch({
                      type: actionTypes.SET_OPEN,
                      payload: !state.open,
                    })
                  }
                >
                  Close
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </TabsContent>
        <TabsContent value="password">Change your password here.</TabsContent>
      </Tabs>
    </Dialog>
  );
};

export default IconList;
