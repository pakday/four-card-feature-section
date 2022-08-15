import './FeaturedSection.scss'

const FeaturedSection = () => {
    return (
        <>
            <section className='featured_section'>
                <div className='head_secion'>
                    <h2>Reliable, efficient delivery</h2>
                    <h3>Powered by Technology</h3>
                    <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
                </div>
                <div className='cards'>
                    <div className='card card1'>
                        <h4>Supervisor</h4>
                        <p>Monitors activity to identify project roadblocks</p>
                        <img src='/images/icon-supervisor.svg' alt='Supervisor Service' />
                    </div>
                    <div>
                        <div className='card card2'>
                            <h4>Team Builder</h4>
                            <p>Scans our talent network to create the optimal team for your project</p>
                            <img src='/images/icon-team-builder.svg' alt='Supervisor Service' />
                        </div>
                        <div className='card card3'>
                            <h4>Karma</h4>
                            <p>Regularly evaluates our talent to ensure quality</p>
                            <img src='/images/icon-karma.svg' alt='Supervisor Service' />
                        </div>
                    </div>
                    <div className='card card4'>
                        <h4>Calculator</h4>
                        <p>Uses data from past projects to provide better delivery estimates</p>
                        <img src='/images/icon-calculator.svg' alt='Supervisor Service' />
                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedSection