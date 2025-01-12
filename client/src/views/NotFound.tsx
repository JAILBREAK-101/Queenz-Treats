import {useNavigate} from "react-router-dom";
import { Button } from "../shared/components/ui/button";

export const NotFound = (): JSX.Element => {

    const navigate = useNavigate();

    return (
        <main>
            <main className="flex justify-center">
                <section className="self-center">
                    <h1 className="text-5xl text-center">404</h1>
                    
                    {/* <img src={PageImg} alt="404" className="self-center"/> */}
                    
                    <p className="m-3">The page you are trying to access does not exist</p>

                    <Button loading={false} variant='primary' disabled={false} body={'Go to homepage'} size='md' onClick={() => navigate('/')}/>
                </section>
            </main>
        </main>
    )

}
