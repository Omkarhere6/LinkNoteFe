import { CancelIcon } from "../icons/CancelIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Button } from "./Button";
import { Input } from "./Input";

interface AddContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function AddContentModal(props: AddContentModalProps) {
  return (
    <>
      <div>
        {props.open && (
          <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-90 flex justify-center" >
            <div className="flex items-center justify-center min-h-screen min-w-screen">
              <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
                <div className="flex justify-end">
                  <div
                    onClick={props.onClose}
                    className="cursor-pointer text-gray-500 hover:text-gray-700"
                  >
                    <CancelIcon size="size-8"/>
                  </div>
                </div>
                <h2 className="text-xl font-semibold mb-4">Add Content</h2>
                <div className="space-y-4">
                  <Input placeholder="Enter Title" type="text"></Input>
                  <Input placeholder="Enter Type" type="text"></Input>
                  <Input placeholder="Enter Link" type="text"></Input>
                  <div className="flex justify-center">
                    <Button text="Add Content" variant="Primary"></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
