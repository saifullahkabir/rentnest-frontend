"use client";

import { useState } from "react";
import { CreditCard, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { createPayment } from "../../_actions/tenant-actions/tenantPayments";

type TenantPayButtonProps = {
  rentalRequestId: string;
};

export default function TenantPayButton({
  rentalRequestId,
}: TenantPayButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setIsLoading(true);

      const result = await createPayment({
        rentalRequestId,
      });

      if (!result.success || !result.data?.paymentUrl) {
        throw new Error(result.message || "Failed to create payment.");
      }

      window.location.href = result.data.paymentUrl;
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong.",
      );

      setIsLoading(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handlePayment}
      disabled={isLoading}
      className="rounded-lg bg-blue-600 px-4 shadow-sm shadow-blue-600/20 hover:bg-blue-700"
    >
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          <CreditCard className="h-4 w-4" />
          Pay Now
        </>
      )}
    </Button>
  );
}
