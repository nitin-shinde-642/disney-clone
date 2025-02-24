"use client";

import { usePathname, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
  input: z.string().min(1),
});

function SearchInput() {
  const router = useRouter();
  const pathname = usePathname();

  const inputDefaultValue = decodeURIComponent(
    pathname.split("/search/")[1] || ""
  );
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      input: inputDefaultValue,
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(router);
    router.push(`/search/${values.input}`);
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="input"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Search..." {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
export default SearchInput;
