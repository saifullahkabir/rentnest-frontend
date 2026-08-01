"use client";

import { useState } from "react";
import { CalendarDays, Loader2, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { createRentalRequest } from "../../_action/rental-request/createRentalRequest";

interface RentalRequestModalProps {
  propertyId: string;
  propertyTitle: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function RentalRequestModal({
  propertyId,
  propertyTitle,
  open,
  onOpenChange,
}: RentalRequestModalProps) {
  const [moveInDate, setMoveInDate] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);

      const payload = {
        propertyId,
        ...(moveInDate && {
          moveInDate: new Date(`${moveInDate}T00:00:00`).toISOString(),
        }),
        ...(message.trim() && {
          message: message.trim(),
        }),
      };

      console.log("payload====>", payload);

      const result = await createRentalRequest(payload);

      console.log("result====>", result);

      if (result.success) {
        toast.success(
          result.message || "Rental request submitted successfully.",
        );

        setMoveInDate("");
        setMessage("");

        onOpenChange(false);
      }
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to submit rental request.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOpenChange = (value: boolean) => {
    if (isSubmitting) return;

    if (!value) {
      setMoveInDate("");
      setMessage("");
    }

    onOpenChange(value);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-lg rounded-2xl p-0 overflow-hidden">
        <form onSubmit={handleSubmit}>
          {/* Header */}
          <DialogHeader className="border-b bg-muted/30 px-5 py-5 sm:px-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Send className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0">
                <DialogTitle className="text-xl">Request to Rent</DialogTitle>

                <DialogDescription className="mt-1 leading-5">
                  Send a rental request for{" "}
                  <span className="font-medium text-foreground">
                    {propertyTitle}
                  </span>
                  .
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          {/* Form */}
          <div className="space-y-6 px-5 py-6 sm:px-6">
            {/* Move-in date */}
            <div className="space-y-2">
              <Label htmlFor="moveInDate">
                Preferred Move-in Date
                <span className="ml-1 text-muted-foreground">(Optional)</span>
              </Label>

              <div className="relative">
                <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                  id="moveInDate"
                  type="date"
                  value={moveInDate}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => setMoveInDate(e.target.value)}
                  className="h-11 pl-10"
                  disabled={isSubmitting}
                />
              </div>

              <p className="text-xs text-muted-foreground">
                Select your preferred date to move into the property.
              </p>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <Label htmlFor="message">
                Message
                <span className="ml-1 text-muted-foreground">(Optional)</span>
              </Label>

              <div className="relative">
                <MessageSquare className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write a message to the property owner..."
                  className="min-h-28 resize-none pl-10"
                  maxLength={500}
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex justify-end">
                <span className="text-xs text-muted-foreground">
                  {message.length}/500
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="rounded-xl border bg-muted/40 p-4">
              <p className="text-sm leading-6 text-muted-foreground">
                Your request will be sent to the property owner. The owner can
                review your request and decide whether to approve or reject it.
              </p>
            </div>
          </div>

          {/* Footer */}
          <DialogFooter className="flex-col-reverse gap-2 border-t bg-muted/20 px-5 py-4 sm:flex-row sm:px-6">
            <Button
              type="button"
              variant="outline"
              className="w-full sm:w-auto"
              disabled={isSubmitting}
              onClick={() => handleOpenChange(false)}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="w-full sm:w-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send Rental Request
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
