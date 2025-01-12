export const SuccessDisplay = (props: { display: string | null, showLogout?: boolean }) => {

    return (
        <section className="text-center" style={{paddingTop: '2vh'}}>
            <h4 className="text-green-600 font-bold">{props.display}</h4>
        </section>
    );
};
