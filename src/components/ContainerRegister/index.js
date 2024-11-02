function ContainerRegister({children}) {
    return ( 
        <div className="default-container container-invite">
            <div className="overlay">
                {children}
            </div>
        </div>
     );
}

export default ContainerRegister;