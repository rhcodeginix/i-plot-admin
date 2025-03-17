import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import Button from "../../../components/common/button";
import { Input } from "../../../components/ui/input";

const formSchema = z.object({
  Kategorinavn: z.string().min(1, {
    message: "Kategorinavn må bestå av minst 2 tegn.",
  }),
});

export const AddNewSubCat: React.FC<{ onClose: any; setSubCategory: any }> = ({
  onClose,
  setSubCategory,
}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    onClose();
    setSubCategory((prev: any) => [...prev, data.Kategorinavn]);
  };
  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="relative w-full"
        >
          <div>
            <FormField
              control={form.control}
              name="Kategorinavn"
              render={({ field, fieldState }) => (
                <FormItem>
                  <p
                    className={`${
                      fieldState.error ? "text-red" : "text-black"
                    } mb-[6px] text-sm font-medium`}
                  >
                    Kategorinavn
                  </p>
                  <FormControl>
                    <div className="relative">
                      <Input
                        placeholder="Skriv inn Kategorinavn"
                        {...field}
                        className={`bg-white rounded-[8px] border text-black
                                          ${
                                            fieldState?.error
                                              ? "border-red"
                                              : "border-gray1"
                                          } `}
                        type="text"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex justify-end w-full gap-5 items-center left-0 mt-8">
            <div onClick={() => form.reset()} className="w-1/2 sm:w-auto">
              <Button
                text="Avbryt"
                className="border border-lightPurple bg-lightPurple text-purple text-sm rounded-[8px] h-[40px] font-medium relative px-12 py-2 flex items-center gap-2"
              />
            </div>
            <Button
              text="Lagre"
              className="border border-purple bg-purple text-white text-sm rounded-[8px] h-[40px] font-medium relative px-12 py-2 flex items-center gap-2"
              type="submit"
            />
          </div>
        </form>
      </Form>
    </>
  );
};
