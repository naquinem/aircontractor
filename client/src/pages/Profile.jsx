import Image from "../Img/splitbg.jpg"
import Cassette from "../Img/cassette.png"
import '../styles/styles.css'

export default function Profile() {
	return (
		<>
			<div className="sm:relative">
				<img className="background" src={Image}/>
                <img className="cassette" src={Cassette}/>
                <div className="sm:absolute top-10 mx-5 text-5xl font-bold text-blue-700">
					<h5 className="opacity-100 p-3">
                        Welcome to <br/>Paulino Aircon Services
                    </h5>
                    <p className="font-normal my-10 p-5  text-gray-800 text-2xl">
                        At Paulino Aircon Services, we specialize in providing top-notch air conditioning services to ensure that your home or business stays cool and comfortable year-round. With our team of experienced technicians and commitment to customer satisfaction, you can trust us with all your aircon needs.
                    </p>
                    <div className="block mx-10">
                        <h5 className="my-6 mt-10 font-normal tracking-tight text-blue-700 text-5xl">
                            Our Services
                        </h5>
                        <div className="mx-5">
                            <h5 className="my-6 mt-10 font-normal tracking-tight text-blue-700 text-3xl">
                                Aircon Cleaning
                            </h5>
                            <p className="font-normal p-5 text-gray-800 w-30 text-2xl">
                                Regular cleaning is essential for maintaining the efficiency and longevity of your air conditioning units. Our thorough cleaning process removes dirt, dust, and other debris, helping your aircon perform at its best.
                            </p>
                        </div>
                        <div className="mx-5">
                            <h5 className="my-6 mt-10 font-normal tracking-tight text-blue-700 text-3xl">
                                Aircon Repair
                            </h5>
                            <p className="font-normal p-5 text-gray-800 w-30 text-2xl">
                                Facing issues with your aircon? Don't sweat it! Our skilled tecnicians can diagnose and repair a wide range of problems, getting your unit back up and running in no time.
                            </p>
                        </div>
                        <div className="mx-5">
                            <h5 className="my-6 mt-10 font-normal tracking-tight text-blue-700 text-3xl">
                                Aircon installation
                            </h5>
                            <p className="font-normal p-5 text-gray-800 w-30 text-2xl">
                                Whether you're installing a new aircon system or replacing an old one, our team can handle the job with precision and care. We'll ensure that your new unit is properly installed for optimal performance and meet the standard procedure during installation.
                            </p>
                        </div>
                        <div className="mx-5">
                            <h5 className="my-6 mt-10 font-normal tracking-tight text-blue-700 text-3xl">
                                Aircon Reprocessing
                            </h5>
                            <p className="font-normal p-5 text-gray-800 w-30 text-2xl">
                                Worried about the environmental impact of your aircon? We offer reprocessing services to safely dispose of old units and recycle components, reducing waste and minimizing harm to the planet.
                            </p>
                        </div>
                    </div>
				</div>
				<hr className="bg-slate-400 h-1 w-full my-4" />

				<div className="block mx-10">
					<h5 className="my-6 mt-10 font-normal tracking-tight text-blue-700 text-5xl">
						Why Choose Us
					</h5>
					<p className="font-normal p-5 text-gray-500 w-30 text-2xl mx-5">
                        We are fully committed to our customers and meet the airconditioning standard procedure in installation, and preventive maintenance.
                    </p>

				</div>
			</div>

		</>
	);
}
