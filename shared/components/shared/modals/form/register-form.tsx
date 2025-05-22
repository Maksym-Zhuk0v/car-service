"use client";

import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { TFormRegisterValues, formRegisterSchema } from "./schemas";
import { FormInput } from "./form-input";
import { Button } from "@/shared/components/ui/button";
import { registerUser } from "@/app/actions";

interface Props {
  onClose?: VoidFunction;
  onClickLogin?: VoidFunction;
  setType: React.Dispatch<
    React.SetStateAction<"login" | "register" | "verification">
  >;
}

export const RegisterForm: React.FC<Props> = ({ onClose, setType }) => {
  const [loading, setLoading] = useState(false);
  const form = useForm<TFormRegisterValues>({
    resolver: zodResolver(formRegisterSchema),
    defaultValues: {
      email: "",
      fullName: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TFormRegisterValues) => {
    try {
      setLoading(true);
      await registerUser({
        email: data.email,
        fullName: data.fullName,
        password: data.password,
      });

      setType("verification");

      toast.error("Registration was successful", {
        icon: "✅",
      });

      // onClose?.();
    } catch (error) {
      return toast.error("Email or password is incorrect", {
        icon: "❌",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-5"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormInput name="email" label="E-Mail" required />
        <FormInput name="fullName" label="Full Name" required />
        <FormInput name="password" label="Password" type="password" required />
        <FormInput
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          required
        />

        <Button disabled={loading} className="h-12 text-base" type="submit">
          Registration
        </Button>
      </form>
    </FormProvider>
  );
};
