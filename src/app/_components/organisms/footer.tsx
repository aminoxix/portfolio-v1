"use client";

import Link from "next/link";

import Paragraph from "../atoms/paragraph";
import SharedBar from "../atoms/shared-bar";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendEmail } from "~/server/api/externals/send-email";

import { useState } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiPolywork } from "react-icons/si";
import ModalMessage from "../molecules/modals/message";

const messageSchema = z.object({
  from: z.string().min(5, "can we be reachable?"),
  content: z.string().min(5, "less content, less attention!"),
});

export type Message = z.infer<typeof messageSchema>;

export const defaultMessage = {
  from: "",
  content: "",
};

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Message>({
    mode: "onChange",
    defaultValues: defaultMessage,
    resolver: zodResolver(messageSchema),
  });

  const { mutate: sendEmailMutation, isLoading } = useMutation({
    mutationFn: (data: Message) =>
      sendEmail({
        template: "mail",
        vars: {
          name: data.from,
          content: data.content,
        },
      }),
    onSuccess: (response) => {
      reset();
    },
  });

  const onSubmit = (data: Message) => {
    // isValid && sendEmailMutation(data);
    setIsModalOpen(true);
    console.log("data", data);
  };

  console.log("isValid", isValid);
  console.log("errors", errors);

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center gap-1"
      >
        <Paragraph className="text-white" text="have a nice day!" />
        <SharedBar
          containerClassName="w-full md:w-[300px] relative"
          innerContainerClassName="bg-black"
        >
          <input
            type="text"
            {...register("content")}
            placeholder="feel free to say 'hi'..."
            className="h-[45px] w-full rounded-full bg-black px-2 text-white focus:outline-none"
          />
          {errors.content && (
            <p className="mr-8 text-[10px] font-medium text-red-500">
              {errors.content.message}
            </p>
          )}
          <button autoFocus type="submit" disabled={isLoading}>
            <IoIosSend className="absolute right-4 top-3 h-8 w-8 text-primary" />
          </button>
          <ModalMessage
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          >
            <h1>tested</h1>
          </ModalMessage>
        </SharedBar>
      </form>
      <SharedBar containerClassName="w-[200px]">
        <div className="flex w-full items-center justify-between px-4">
          <Link target="_blank" href="https://twitter.com/aminoxix">
            <FaSquareXTwitter className="h-7 w-7 md:h-9 md:w-9" />
          </Link>
          <Link target="_blank" href="https://polywork.com/aminoxix">
            <SiPolywork className="h-6 w-6 md:h-8 md:w-8" />
          </Link>
          <Link target="_blank" href="https://linkedin.com/in/aminoxix">
            <IoLogoLinkedin className="h-7 w-7 md:h-9 md:w-9" />
          </Link>
        </div>
      </SharedBar>
    </div>
  );
};

export default Footer;
