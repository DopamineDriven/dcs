"use client";

import { useRef, useState } from "react";
import { eventSubmissionAction } from "@/app/actions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { DrisdellIcon } from "@/ui/icons/DrisdellIcon";

export function EventFormPopupComponent({
  ip,
  userAgent
}: {
  ip: string;
  userAgent: string;
}) {
  const [open, setOpen] = useState(false);
  const [firstName, setFirstName] = useState("");
  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    toast({
      title: "Email Sent.",
      description: `We'll get back to you soon, ${firstName}!`
    });
    setOpen(false);
    // Reset form fields
    setFirstName("");
  };

  async function formAction(formData: FormData) {
    try {
      await eventSubmissionAction(formData);
      formRef.current?.reset();
    } catch (err) {
      console.error(
        typeof err === "string" ? err : JSON.stringify(err, null, 2)
      );
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' id='get-in-touch'>
          Get in Touch
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[90vw] max-w-[425px] sm:w-full'>
        <DialogHeader className='flex flex-col items-center space-y-2 sm:space-y-4'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full sm:h-16 sm:w-16'>
            <DrisdellIcon className='h-6 w-6 sm:h-8 sm:w-8' />
          </div>
          <DialogTitle className='text-xl font-bold sm:text-2xl'>
            Contact Us
          </DialogTitle>
        </DialogHeader>
        <form
          action={formAction}
          onSubmit={handleSubmit}
          className='mt-2 space-y-3 text-black sm:mt-4 sm:space-y-4'>
          <input
            aria-hidden='true'
            type='hidden'
            name='ip'
            id='ip'
            value={ip}
          />
          <input
            type='hidden'
            aria-hidden='true'
            name='user-agent'
            id='user-agent'
            value={userAgent}
          />
          <div className='grid grid-cols-2 gap-3 sm:gap-4'>
            <div className='space-y-2'>
              <Label htmlFor='first-name'>First Name</Label>
              <Input
                id='first-name'
                name='first-name'
                type='text'
                autoComplete='given-name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                className='px-3 py-2'
              />
            </div>
            <div className='space-y-2'>
              <Label htmlFor='last-name'>Last Name</Label>
              <Input
                id='last-name'
                name='last-name'
                type='text'
                required
                autoComplete='family-name'
                className='px-3 py-2'
              />
            </div>
          </div>
          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              name='email'
              autoComplete='email'
              required
              className='px-3 py-2'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='phone-number'>Phone Number</Label>
            <Input
              id='phone-number'
              type='tel'
              name='phone-number'
              required
              autoComplete='tel'
              className='px-3 py-2'
            />
          </div>
          <div className='space-y-2'>
            <Label htmlFor='body'>Message</Label>
            <Textarea
              id='body'
              name='body'
              defaultValue={""}
              rows={4}
              required
              className='px-3 py-2'
            />
          </div>
          <Button type='submit' className='w-full py-2'>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
