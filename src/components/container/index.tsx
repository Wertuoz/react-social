import type { FC } from "react"
import type React from "react"

type Props = { children: React.ReactElement[] | React.ReactElement }

export const Container: FC<Props> = ({ children }) => {
  return <div className="flex max-w-screen-x1 mx-auto mt-10">{children}</div>
}
