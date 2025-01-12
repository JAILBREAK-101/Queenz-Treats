import React from "react"
import { Callout } from "@radix-ui/themes"
import { InformationCircleIcon } from "@heroicons/react/24/outline"

const CallOut = (): JSX.Element => {
    return (
        <Callout.Root>
            <Callout.Icon>
                <InformationCircleIcon width={20}/>
            </Callout.Icon>
            <Callout.Text>
                <b>MVP V1.0 Release</b>
            </Callout.Text>
        </Callout.Root>
    )
}

export { CallOut }