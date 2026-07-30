import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import RegisterForm from "../../_components/RegisterForm";

export default function RegisterPage() {
  return (
    <section className="flex min-h-[calc(100vh-80px)] items-center justify-center px-4 py-12">
      <Card className="w-full max-w-lg rounded-3xl shadow-lg ">
        <CardHeader className="space-y-2 text-center">
          <CardTitle className="text-3xl font-bold">Create Account</CardTitle>

          <CardDescription>
            Join RentNest to rent or list properties.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </section>
  );
}
