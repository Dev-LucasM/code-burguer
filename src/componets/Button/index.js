import React from "react"

import { Button as MyButton } from "./styles"

function Button({children, ...rest}) {
    return <MyButton {...rest}>{children}</MyButton>
}

export default Button