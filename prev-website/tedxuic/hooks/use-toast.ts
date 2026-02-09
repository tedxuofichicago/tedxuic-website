import type React from "react"
// Adapted from shadcn/ui toast component
// https://ui.shadcn.com/docs/components/toast

import type { ToastActionElement, ToastProps } from "@/components/ui/toast/toast"
import { toast, useToast as useToastPrimitive} from "@/components/ui/toast/use-toast"

export function useToast() {
  const { toasts = [] } = useToastPrimitive()

  return {
    toasts,
    toast: (
      props: Omit<
        ToastProps & {
          title?: React.ReactNode
          description?: React.ReactNode
          action?: ToastActionElement
        },
        "id"
      >,
    ) => {
      const id = toast(props).id

      return {
        id,
        dismiss: () => toast.dismiss(id),
        update: (props: any) => toast.update({ ...props, id }),
      }
    },
    dismiss: (toastId?: string) => toast.dismiss(toastId),
  }
}