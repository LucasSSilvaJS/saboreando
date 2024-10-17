import './containersection.css';

function ContainerSection({children, text, column = false}) {
    return ( 
        <section className='container-section container' style={{'padding': '0px'}}>
            <h2 className='title-section' style={{'paddingLeft': '2%'}}>{text}</h2>
            <div className='section-behavior' style={{'flexDirection': column && 'column', 'alignItems': !column && 'normal', 'padding': '2%'}}>
                {children}
            </div>
        </section>
     );
}

export default ContainerSection;