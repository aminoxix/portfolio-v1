"use client";

import Link from "next/link";

import Paragraph from "../atoms/paragraph";
import SharedBar from "../atoms/shared-bar";
import ModalMessage from "../molecules/modals/message";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { sendEmail } from "~/server/api/externals/send-email";

import { useEffect, useRef } from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoIosSend } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { SiPolywork } from "react-icons/si";

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
  const modalRef = useRef<HTMLDialogElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const {
    reset,
    watch,
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
    onSuccess: () => {
      reset();
      modalRef.current?.close();
      console.info({
        text: "thanks! will revert you in a while.",
      });
    },
    onError: () => {
      console.info({
        text: "sorry, we couldn't send your message. please try again later.",
      });
    },
  });

  // close dialog & auto-reset form on leaving footer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (!entry.isIntersecting) {
            modalRef.current?.close();
            reset();
          }
        });
      },
    );

    const el = footerRef.current;
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  const onSubmit = (data: Message) => {
    if (isValid || !isLoading) {
      sendEmailMutation(data);
    }
  };

  return (
    <div
      ref={footerRef}
      className="flex w-full flex-col items-center gap-8 border-red-500"
    >
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
          {/* workflow to send mail */}
          <button
            disabled={isLoading}
            onClick={() => watch("content") && modalRef.current?.showModal()}
          >
            <IoIosSend className="absolute right-4 top-3 h-8 w-8 text-primary hover:scale-110" />
          </button>
          <ModalMessage modalRef={modalRef}>
            <div className="flex flex-col gap-4">
              <SharedBar
                containerClassName=""
                innerContainerClassName="bg-black"
              >
                <input
                  type="text"
                  {...register("from")}
                  placeholder="eg.: aminos (@aminoxix@duck.com)"
                  className="h-full min-w-full rounded-full bg-black px-2 text-xs text-white focus:outline-none"
                />
              </SharedBar>
              <button
                type="submit"
                className="flex justify-end"
                disabled={!isValid || isLoading}
              >
                <IoIosSend className="h-8 w-8 text-primary hover:scale-110" />
              </button>
            </div>
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
