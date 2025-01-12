export const LoadingError = (props: { display: string | null, showLogout?: boolean }) => {
    
    return (
        <section className="text-center" style={{paddingTop: '5vh'}}>
            <h4 className="text-red-500 font-bold">{props.display}</h4>
        </section>
    );
};
