import { Spinner } from "@radix-ui/themes"

export const Switch = ({loading, isToggled, ...props}: any) => {

    return (
        <>
            <label className={`switch ${loading ? 'isLoading': ''}`} htmlFor="switch">

                {
                    !loading && <input id="switch" name="switch" className="switch_input" type="checkbox" defaultChecked={isToggled} {...props} />
                }
                <span className="slider">
                </span>
                {
                    loading &&
                    <Spinner />
                }
            </label>
        </>
    )
}