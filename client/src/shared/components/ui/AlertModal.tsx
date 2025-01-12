import { CustomButton } from "../form/Button"
import { AlertDialog, Flex } from "@radix-ui/themes"

const AlertModal = (buttonAction: string) => {
    return (
        <>
            <AlertDialog.Root>
                <AlertDialog.Trigger>
                    <CustomButton loading={false} disabled={false} body={buttonAction} size={""} />
                </AlertDialog.Trigger>
                <AlertDialog.Content maxWidth="450px">
                    <AlertDialog.Title>Revoke access</AlertDialog.Title>
                    <AlertDialog.Description size="2">
                    Are you sure? This application will no longer be accessible and any
                    existing sessions will be expired.
                    </AlertDialog.Description>
                
                    <Flex gap="3" mt="4" justify="end">
                    <AlertDialog.Cancel>
                    <CustomButton loading={false} disabled={false} body={"Cancel"} size={""} />
                    </AlertDialog.Cancel>
                    <AlertDialog.Action>
                    <CustomButton loading={false} disabled={false} body={buttonAction} size={""} />
                    </AlertDialog.Action>
                    </Flex>
                </AlertDialog.Content>
            </AlertDialog.Root>
        </>
    )
}

export { AlertModal }