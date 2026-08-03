import { getLandlordPayments } from "@/app/(dashboardGroup)/_actions/landlord-actions/landlordPayments";
import LandlordPaymentCard from "@/app/(dashboardGroup)/_components/landlord/LandlordPaymentCard";
import { LandlordPayment } from "@/lib/types/landlord-payment";

export default async function LandlordPaymentsPage() {
  const result = await getLandlordPayments();

  const payments = result.data ?? [];

  console.log(payments);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Payments
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          View payments received for your rental properties.
        </p>
      </div>

      {payments.length === 0 ? (
        <div className="rounded-2xl border bg-card p-10 text-center">
          <h2 className="font-semibold">No payments yet</h2>

          <p className="mt-2 text-sm text-muted-foreground">
            Payments made for your properties will appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-5">
          {payments.map((payment: LandlordPayment) => (
            <LandlordPaymentCard key={payment.id} payment={payment} />
          ))}
        </div>
      )}
    </div>
  );
}
