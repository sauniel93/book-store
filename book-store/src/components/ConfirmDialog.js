import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useConfirmDialogContext } from "../contexts/ConfirmDialogContext";
import { useBookContext } from "../contexts/BookContext";

export default function ConfirmDialog() {
  const { setId } = useBookContext();
  const { open, setOpen, setAccept } = useConfirmDialogContext();

  const handleClose = () => {
    setAccept(false);
    setOpen(false);
    setId(0);
  };

  const handleAgree = () => {
    setAccept(true);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Book"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure? The Books cann`t be recovered
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
