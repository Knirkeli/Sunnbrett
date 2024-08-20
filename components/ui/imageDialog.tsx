import * as React from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface ImageDialogProps {
  imageUrl: string | null;
  onClose: () => void;
}

const ImageDialog: React.FC<ImageDialogProps> = ({ imageUrl, onClose }) => {
  return (
    <Dialog open={!!imageUrl} onOpenChange={onClose}>
      <DialogContent>
        {imageUrl && (
          <img src={imageUrl} alt="Selected" className="w-full h-auto" />
        )}
        <DialogClose asChild>
          <button className="absolute top-2 right-2">Close</button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default ImageDialog;
