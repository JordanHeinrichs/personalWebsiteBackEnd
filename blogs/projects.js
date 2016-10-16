module.exports.projectList = [
   { name: 'solar_car', src: 'picture1' },
   { name: 'aero_design', src: 'picture2' }
];

module.exports.project = {
   solar_car: `The <a href="http://www.calgarysolarcar.ca/">Solar Car Team</a> is a team dedicated to designing and racing cars powered off the Sun. I have been a part of the team since Fall 2013 working as a software developer for the car's embedded systems as well as the real time telemetry application. I was the lead software developer on the team from 2013 to August 2015.

<a href="http://www.calgarysolarcar.ca/"><img class="wp-image-66" src="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/SolarCarTeamCompressed-1024x683.jpg" alt="" width="411" height="274" /></a> Solar Car Team at FSGP 2015

The embedded system I was working with was the <a href="https://developer.mbed.org/platforms/mbed-LPC1768/">ARM mbed LPC1768</a>. It communicated to the <a href="http://tritium.com.au/products/wavesculptor22-motor-inverter/">Tritium motor controllers</a> and battery monitoring system via CAN. It also periodically read in the driver controls and updated three char OLED displays over SPI. To communicate with the base station monitoring the telemetry it used an XBee 900 mHz radio via UART. The code for this project can be found <a href="https://github.com/UCSolarCarTeam/Schulich-Delta-CCS-2">here</a>.

<a href="http://www.calgarysolarcar.ca/"><img class="wp-image-67 size-large" src="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/SolarCarDisplay-1024x768.jpg" alt="" width="700" height="525" /></a> The ARM mbed with the XBee radio and dashboard while testing

The telemetry monitoring program was built in C++ with the QT framework for the GUI. The program received the telemetry through another XBee 900 mHz radio and parse then display the information. In order to display the telemetry on multiple computers the program that was connected to the radio would automatically forward all packets to a UDP multicast address so that anyone on the network can receive updates. The telemetry program is shown below and the code for it is available <a href="https://github.com/UCSolarCarTeam/Schulich-Delta-Telemetry">here</a>.

<a href="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/Telemetry.png"><img class="wp-image-68 size-large" src="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/Telemetry-1024x576.png" alt="" width="700" height="394" /></a> Telemetry Program

In August of 2015 the team went down to Austin Texas to compete at <a href="http://americansolarchallenge.org/the-competition/fsgp-2015/">FSGP2015</a>. The winner was the team with the most amount of laps around the F1 track, Circuit of the Americas. The competition was tough and the car ran into many issues including the battery pack overheating due to the high ambient temperature. Even with those challenges we managed to place 9/15 and the car traveled 463 km in three days. Lots of great experiences and lessons learned and plus I got to drive on an F1 track.

<img class="wp-image-65 size-large" src="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/DSC_0120-1024x683.jpg" alt="DSC_0120" width="700" height="467" /> Working on the car at FSGP2015
`,

   aero_design: `<h3>Schulich Aero Design Team</h3>
I was a part of this team for my first two years of university. We designed and built a model airplane for the SAE Aerodesign Heavy Lift Competition. The goal of the competition was to build an aircraft under certain requirements to lift the maximum amount of payload. We manufactured the plane out of balsa and Monokote. Unfortunately we never made it to competition as the plane crashed during testing but it was an excellent experience regardless.

<img class="wp-image-60 size-medium" src="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/AeroDesign2-300x225.jpg" alt="AeroDesign2" width="300" height="225" /> Working on the plane. I am in blue.

<img class="wp-image-59 size-medium" src="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/AeroDesign-300x225.jpg" alt="AeroDesign" width="300" height="225" /> The team celebrating progress on the wings.

<a href="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/AeroDesign3.jpg"><img class="size-medium wp-image-61" src="http://jordanheinrichs.com/wp/wp-content/uploads/2015/10/AeroDesign3-300x225.jpg" alt="Plane and team during test flight day! (I was the one taking the picture)" width="300" height="225" /></a> Plane and team during test flight day! (I was the one taking the picture)`

};

