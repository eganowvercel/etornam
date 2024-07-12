import Image from 'next/image';
import React from 'react';

function About() {
    return (
        <div className="bg-gray-100 md:py-48 py-20" id='about' data-aos="fade-up">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 w-full flex justify-center mb-8 lg:mb-0 overflow-hidden" data-aos="fade-up" data-aos-duration="2000">
                    <Image
                        width={10000}
                        height={100}
                        src="/images/image-man.jpg"
                        alt="Ready to Rebuild"
                    />
                </div>
                <div className="lg:w-2/3 w-full lg:pl-8 p-3" data-aos="fade-left" data-aos-duration="2000">
                    <h2 className="text-3xl font-bold text-blue-900 mb-4">Hon. Etornam James Flolu</h2>
                    <p className="text-gray-700 mb-4">
                        Hon. Etornam James Flolu is the District Chief Executive of the Afadzato South District in the Volta Region of Ghana and the New Patriotic Party (NPP) Parliamentary Candidate for the Afadzato South Constituency. He currently superintends as the Dean of Metropolitan, Municipal, District Chief Executives (MMDCEs) in the Volta Region consisting of eighteen Districts.
                    </p>
                    <p className="text-gray-700 mb-4">
                        He attended St. Augustine’s College in Cape Coast and holds a Bachelor of Arts, B.A (Hons) in Political Science and Information Studies from the University of Ghana, Legon. He holds a Certificate in Alternative Dispute Resolution (ADR) for Small & Medium Enterprise (SMEs). He is also pursuing MSc. Local Economic Development at the Institute of Local Government Studies, Accra.
                    </p>
                    <p className="text-gray-700 mb-4">
                        He is a member of the International Youth and Diplomacy Conference (IYDC), and Ghana Model UN Conference. He is also Ghana’s representative on the Young Elected Local Officers (YELO) of the UCLG Regional Caucus.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Etornam was appointed as the District Chief Executive in 2019 at age 29 making him the youngest Government Appointee in the country at that time.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Etornam is an astute banker, businessman, and entrepreneur who has worked with United Bank for Africa (UBA) and served in various capacities as a Training Facilitator, Africa Trade Desk Officer and Relationship Manager responsible for Mining and Transportation, Client and later Retail Banking. He has enormous experience in corporate branding, communications and customer experience and he is widely considered as one of the best Customer Experience Consultants in the country.
                    </p>
                    <p className="text-gray-700 mb-4">
                        Etornam chairs and is a member of various Committees and sits on a number of Boards of other Companies. He has been a Guest Speaker and delivered keynote addresses at several local and international conferences and seminars.
                    </p>
                    <p className="text-gray-700 mb-4">
                        He is a motivational Speaker, Philanthropist and has a passion for human development. He has a great passion for tourism and its development and he is poised to transform the tourism sector of the district into a world class hub to create sustainable jobs for the Youth, boost the local economy and improve the livelihood of the people.
                    </p>
                    <p className="text-gray-700 mb-4">
                        He selflessly ensures that the marginalized and minority groups are accorded with the same level of courtesies, favor and opportunities. He runs an ‘open door’ policy and is ready to collaborate to ensure the development of the district.
                    </p>
                    <p className="text-gray-700">
                        His hobbies include reading, driving, hiking, cooking, traveling, sightseeing, sports and devoting time to fraternizing with the less privileged to support and motivate them.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
