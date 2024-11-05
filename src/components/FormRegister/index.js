import './form-register.css';

function FormRegister({children, btnName, btnAction, heightAuto = false}) {
    return ( 
        <main className='container' style={{'padding': '0px 4%'}}>
                <form>
                    <div className='invite-form-wrapper' style={{'height' : heightAuto && 'auto'}}>
                        {children}
                    </div>
                    <div style={{'padding': '20px 0px'}}>
                        <button type='submit' className='button' onClick={btnAction}>
                            {btnName}
                        </button>
                    </div>
                </form>
        </main>
     );
}

export default FormRegister;