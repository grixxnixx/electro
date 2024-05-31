"use client";

// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSeparator,
//   InputOTPSlot,
// } from "@/app/components/ui/input-otp";

// import Logo from "@/app/components/ui/Logo";
// import Link from "next/link";
// import { useState } from "react";
// import { useForm } from "react-hook-form";

// const VerifyOTP = () => {
//   const { register, control, handleSubmit } = useForm();
//   const [value, setValue] = useState();

//   function onSubmit(data) {}

//   return (
//     <div className="flex items-center min-h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
//       <div className="sm:w-[34rem] sm:py-8 mx-auto sm:border sm:border-gray-200 sm:shadow-sm">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
//           <Logo />
//           <h2 className="font-serif mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
//             OTP Verification
//           </h2>

//           <form onSubmit={handleSubmit(onSubmit)}>
//             <InputOTP maxLength={6}>
//               <InputOTPGroup>
//                 <InputOTPSlot index={0} />
//                 <InputOTPSlot index={1} />
//                 <InputOTPSlot index={2} />
//               </InputOTPGroup>
//               <InputOTPSeparator />
//               <InputOTPGroup>
//                 <InputOTPSlot index={3} />
//                 <InputOTPSlot index={4} />
//                 <InputOTPSlot index={5} />
//               </InputOTPGroup>
//             </InputOTP>
//             <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm text-center flex flex-col items-center">
//               <button type="button" className="btn-primary mt-4">
//                 Verify
//               </button>
//             </div>
//           </form>
//         </div>

//         <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm text-center flex flex-col items-center">
//           <button className="btn-primary mt-4" href="/login">
//             Verify
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerifyOTP;

"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/app/components/ui/input-otp";
import Logo from "@/app/components/ui/Logo";
import SpinnerMini from "@/app/components/ui/SpinnerMini";
import { verifyOtp } from "@/app/_services/apiAuth";
import { useToast } from "@/app/_hooks/use-toast";

function InputOTPForm() {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      otp: "",
    },
  });

  async function onSubmit({ otp }) {
    console.log(otp);
    try {
      const res = await verifyOtp(otp);

      console.log(res);

      if (res.data) {
        localStorage.setItem("access-token", res.auth);
        router.replace("/dashboard");

        toast({
          variant: "success",
          title: res.message,
          duration: 1000,
        });
      }
    } catch (err) {
      console.log(err);
      if (err.response) {
        toast({
          variant: "destructive",
          title: err.response.data.message,
          duration: 1000,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Something went wrong!",
          duration: 1000,
        });
      }
    }
  }

  return (
    <div className="flex items-center min-h-dvh flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
      <div className="sm:w-[34rem] sm:py-8 mx-auto sm:border sm:border-gray-200 sm:shadow-sm">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex flex-col items-center">
          <Logo />
          <h2 className="font-serif mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mb-10">
            OTP Verification
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="w-2/3 space-y-6 text-center"
            >
              <FormField
                control={form.control}
                name="otp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>One-Time Password</FormLabel>
                    <FormControl>
                      <InputOTP maxLength={6} {...field}>
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormDescription>
                      Please enter the one-time password sent to your Email.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <button type="submit" className="btn-primary">
                {form.formState.isSubmitting ? <SpinnerMini /> : "Submit"}
              </button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default InputOTPForm;
