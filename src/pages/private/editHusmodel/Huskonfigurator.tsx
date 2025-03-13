import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  //   FormControl,
  //   FormField,
  //   FormItem,
  //   FormMessage,
} from "../../../components/ui/form";
import Button from "../../../components/common/button";

const formSchema = z.object({});

export const Huskonfigurator: React.FC<{ setActiveTab: any }> = ({
  setActiveTab,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    setActiveTab(2);
  };

  return (
    <>
      <h3 className="text-darkBlack text-2xl font-semibold mb-8 px-6">
        Her konfigurerer du husmodellen
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
          <div className="px-6 mb-[70px]">
            <div className="flex flex-col gap-8">
              <div className="flex gap-8">
                <div className="w-[20%]">
                  <h5 className="text-black text-sm font-medium">
                    Grunninformasjon
                  </h5>
                  <p className="text-gray text-sm whitespace-nowrap">
                    Legg til bilder og husdetaljer
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6 w-[80%] shadow-shadow2 px-6 py-5 rounded-lg">
                  abc
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full gap-5 items-center sticky bottom-0 bg-white z-50 border-t border-gray2 p-4 left-0">
            <div onClick={() => form.reset()} className="w-1/2 sm:w-auto">
              <Button
                text="Avbryt"
                className="border border-gray2 text-back text-sm rounded-[8px] h-[40px] font-medium relative px-4 py-[10px] flex items-center gap-2"
                type="submit"
              />
            </div>
            <Button
              text="Lagre"
              className="border border-purple bg-purple text-white text-sm rounded-[8px] h-[40px] font-medium relative px-4 py-[10px] flex items-center gap-2"
              type="submit"
            />
          </div>
        </form>
      </Form>
    </>
  );
};
