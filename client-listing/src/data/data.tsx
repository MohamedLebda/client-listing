import {
  CircleIcon,
  CheckCircledIcon,
  CircleBackslashIcon,
} from "@radix-ui/react-icons"

export const statuses = [
  {
    value: "online",
    label: "Online",
    icon: CheckCircledIcon,
  },
  {
    value: "offline",
    label: "Offline",
    icon: CircleIcon,
  },
  {
    value: "inactive",
    label: "Inactive",
    icon: CircleBackslashIcon,
  },
]

export const types = [
  {
    value: "client",
    label: "Client",
  },
  {
    value: "lead",
    label: "Lead",
  },
  {
    value: "affiliate",
    label: "Affiliate",
  },
]
