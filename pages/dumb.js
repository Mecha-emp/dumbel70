if (localStorage.getItem('apiNum') == null) {
    localStorage.setItem('apiNum', '1')
}
if (localStorage.getItem('visit') == null) {
    swal({
        title: "Introducing Mecha",
        text: `A chatbot who will help with all your queries related to EMP. Please use english only ❤`,
        icon: `https://clipart-library.com/img/1974839.png`,
        button: "ok ",
    });
    localStorage.setItem('visit', '1')
}

let input = document.getElementById('input')
let send = document.getElementById('send')
let cont = document.getElementById('bottom_top')


function createMsg(dta, outp, elem, id) {
    elem.innerHTML = `
    <div class="chat_left">
            <p>
                <strong>${dta} </strong>
            </p>
            </div>
            <div class=" chat_right">
            <p class='${dta}Response' id='completion${id}'>${outp}</p>
            </div>
    </div>
    `

    cont.append(elem)
}

let id = 0
function generate() {
    let elem = document.createElement('div')
    let data = input.value
    let stripped = data.replace(/\s+/g, '');
    const sect = document.getElementById('page1')


    
    const chatbotRequests = ["please give", "i need information", "could you assist", "do you know", "how does", "could you", "give me", "give me", "i have a question", "could you clarify", "provide some details on", "i need", "share your", "what is your", "i wouldd like to learn more about", "can you", "tell me your", "provide information about", "guide me", , "tell me ", "i have a query about", "please share your thoughts",];
    const eroticWords = ['sex','nang','xxx','mukta','porn','chud','chut','condom','lund','pussy','boob','gand','kutta','kutti','kuti','madher','chod','randi','randa','lode','loda','lode','bhosd','gay','leabian','trans','ananya','fuck','mother','father','sucking','tanvi','abhinav','bablu','pankaj','manav','nigga','nikhil','nehal','simran','yanshika','kaif','kiss','blowjob','handjob','threesome','gangbang','bitch','girl','vanshika','deepshikha','vipin','behencho','launda','hentai','memes','carryminati','abusing','sperm','cumshot','semen']
    const mechatronicsTerms = ['auto', 'dc', 'ac', 'control', 'bot', 'sens', 'actuator', 'plc', 'hmi', 'pid', 'motion', 'vision', 'integration', 'embedded', 'hydraulics', 'pneumatics', 'design', 'programming', 'microcontrollers', 'motors', 'kinematics', 'dynamics', 'cad', 'cam', 'machine', 'mechaedu', 'industry', 'iot', 'learning', 'ai', 'sustainable', 'efficiency', 'vibration', 'prototyping', 'simulations', 'fault', 'dsp', 'electromechanical', 'systems', 'modeling', 'digitaltwin', 'testing', 'cobots', 'scada', 'mems', 'vr', 'electrohydraulic', 'electropneumatic', 'motion', 'manipulators', 'automatic', 'teleoperation', 'microcontroller', 'realtime', 'analysis', 'kinematics', 'optimization', 'bearings', 'nonlinear', 'adaptive', 'biomechatronics', 'humanoid', 'ethics', 'flexible', 'prototyping', 'computervision', 'telecommunications', 'acquisition', 'fea', 'raspberrypi', 'arduino', 'memssensors', 'control', 'tactile', 'applications', 'drones', 'agvs', 'materials', 'monitoring', 'fuzzylogic', 'agriculture', 'renewable', 'digitaltwin', 'exoskeletons', 'smartmaterials', 'mri', 'hybrid', 'swarm', 'biomechanics', 'wearable', 'neuralnetworks', 'simulation', 'modeling', 'motors', 'sensors', 'actuators', 'controllers', 'encoders', 'gears', 'servos', 'microcontrollers', 'power-supplies', 'batteries', 'chassis', 'frames', 'wheels', 'legs', 'joints', 'links', 'cables', 'connectors', 'brackets', 'bearings', 'grippers', 'end-effectors', 'cams', 'pulleys', 'belts', 'slides', 'rails', 'guides', 'switches', 'relays', 'valves', 'pumps', 'nozzles', 'sprayers', 'tanks', 'screws', 'nuts', 'bolts', 'washers', 'nuts-and-bolts', 'soldering-iron', 'welding-kit', 'circuit-boards', 'modules', 'solenoids', 'plugs', 'adapters', 'solder', 'heat-sinks', 'resistor', 'led', 'button', 'potentiometer', 'servo', 'motor', 'relay', 'transistor', 'diode', 'capacitor', 'breadboard', 'jumperwire', 'lcd', 'sensor', 'encoder', 'gyroscope', 'accelerometer', 'ultrasonic', 'infrared', 'bluetooth', 'wifi', 'gps', 'rtc', 'sdcard', 'steppermotor', 'driver', 'shield', 'display', 'matrix', 'touchscreen', 'piezo', 'sound', 'microphone', 'speaker', 'amplifier', 'thermistor', 'dhtsensor', 'humidity', 'gas', 'rfid', 'nfc', 'magnetic', 'photoresistor', 'colorsensor', 'irremote', 'vibration', 'joystick', 'rfmodule', 'polarize', 'emp', 'polarise', 'robot', 'induct', 'elect', 'switch', 'button', "computer", "software", "hardware", "keyboard", "monitor", "mouse",
        "processor", "memory", "network", "server", "database", "firewall",
        "algorithm", "encryption", "program", "browser", "operating system",
        "interface", "motherboard", "graphics card",
        "router", "cloud computing", "cybersecurity", "programming language",
        "storage", "backup", "malware", "antivirus", "peripheral",
        "virtualization", "api",
        "biometrics", "cache", "scripting", "debugging", "framework", "version", "data center", 'mcb', "ldr", "pid", "dcm", "plc", "hmi", "pwm", "cnc", "agv", "scada", "sbc", "iot", "mems", "cad", "vfd", "rfid", "ros", "tcp", "pld", "fms", "cad", "dof", "ai"];


    // Feel free to use or modify this array as needed.
    function containsEroticTerm(inputString) {
        return eroticWords.some(term => inputString.includes(term));
    }

    if (stripped !== "") {
        elem.setAttribute('class', 'chat user')
        elem.innerHTML = `
    <div class="chat_left">
            <p>
                <strong>You </strong>
            </p>
            </div>
            <div class=" chat_right">
            <p class='UserResponse' id='bot${id}'>${data}</p>
            </div>
    </div>
    `

    cont.append(elem)
        data = data.toLowerCase()
    data = data.replace("'", '')
        
        if (sect.style.paddingBottom != 'calc(100vh - 350px)') {
            sect.style.paddingBottom = 'calc(100vh - 350px)'
        }
        input.value = ""

        let belem = document.createElement('div')
        var bdata = 'This message is occured due to some error. Sorry for the inconvenience.😅 </br> You can send us a feedback for this error. <a href="https://forms.gle/8gbRRSdgeUfSfTAu7">form link</a>'


        belem.setAttribute('class', 'chat bot')
        if (containsEroticTerm(data)) {
            bdata = 'I am trained not to repond on abusive words or terms but trained only to answer queries related to EMP. please fill your query in this <a href="https://forms.gle/8gbRRSdgeUfSfTAu7">form</a> if you feel we made a mistake guessing your prompt so my developer can update me. '
        } 
        else if (data.includes('hello') || data.includes('hey') || data.includes('good morning') || data.includes('good afternoon') || data.includes('good evening')) {

            bdata = 'Hi, how can I help you?🙂'

        }
        else if(data.includes('hi')&&!data.includes('hin')&&!data.includes('hik')&&!data.includes('shi')){
            bdata = 'Hi, how can I help you ?🙂'
        }else if (data.includes('how are you')) {

            bdata = 'I am fine, what about you ?'

        }else if (data.includes('your name') || data.includes('who are you')|| data.includes('yourself')) {

            bdata = 'Myself Mecha, how can I help you?🙂'

        }
        else if(data.includes('tool')&&!data.includes('usa')&&!data.includes('use')){
            bdata = `
            These are some mechanical tools
            </br></br>
            <strong>Mechanical Tools</strong></br>
            Screw </br>
            Hammer </br>
            Screw Driver </br>
            Plier  </br>
            Wrench 
            </br></br>
            <strong>Electrical Tools</strong></br>
            Soldering iron </br>
            Glue Gun </br>
            Drill </br>
            Bulb holder </br>
            Chain saw </br>
            </br>
            <strong>Measuring Tools</strong>
            Calliper </br>
            Elbow Scale </br>
            Inch tape </br>
            Multi Meter </br>
            Thermo meter </br>
            `
        }
        else if (data.includes('what') && data.includes('emp') && !data.includes('club')) {

            bdata = 'EMP, or Electro-Mechanical Production, refers to the manufacturing process that combines electrical and mechanical components to create finished products.'

        }
        else if (data.includes('why') && data.includes('emp') && !data.includes('club')) {

            bdata = 'EMP is crucial for integrating mechanical engineering with electronics and computer science. This interdisciplinary field enhances automation, robotics, and product development. By optimizing performance and promoting energy efficiency, mechatronics improves various industries, from manufacturing to healthcare. Its applications in smart devices, medical equipment, and sustainable technologies underscore its essential role in advancing human capabilities and well-being.'
        }
        else if (data.includes('what') && data.includes('emp') && data.includes('club')) {

            bdata = 'EMP club is place where everyone gets a chance to level up their technological skills. This club works on ideas, thought, contribution and passion of students towards EMP'
        }
        else if (data.includes('member') && data.includes('club') || data.includes('introdu') && data.includes('member') || data.includes('introdu') && data.includes('club')) {
            bdata = `
            Introducing Our club members:
            </br></br>
            <strong>President:</strong>
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/manav.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Manav Jha from 9th b</strong>
            </div>
            </br></br>
            <strong>Vice president:</strong>
            <div style='display:flex ; align-items: center;'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Vanshika Chauhan from 9th-B</strong>
            </div>
            </br></br>
            <strong>Project Manager:</strong>
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/bubula.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Bablu Joshi from 9th-B</strong>
            </div>
            </br></br>
            <strong>Technical Head:</strong>
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/dev.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Dev Raj from 9th-B</strong>
            </div>
            </br></br>
            <strong>Club Secretary:</strong>
            <div style='display:flex ; align-items: center;'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Prakhar Mathur from 9th-C</strong>
            </div>
            </br></br>
            <strong>Event Manager:</strong>
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/harshit.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Harshit Sharma is our Event manager from 9th-B</strong>
            </div>
            </br></br>
            <strong>Club Coordinator 1:</strong>
            <div style='display:flex ; align-items: center; margin-block:5px'>
                <img src='../asset/taiyaba.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Taiyaba from 9th-B</strong>
                </div>
            </br></br>
            <strong>Club Coordinator 2:</strong>
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/ananya.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Ananya Jha from 9th-A</strong>
            </div>s
            `
        }
        else if (data.includes('why') && data.includes('club')) {

            bdata = `
            An Electro-Mechanical Production (EMP) club is important for students for several reasons:</br></br>

            <strong>Skill Development</strong>: EMP clubs provide students with a platform to develop practical skills in the field of electro-mechanical production. Through hands-on activities, workshops, and projects, students can enhance their technical abilities and gain valuable experience.</br></br>

            <strong>Networking Opportunities</strong>: Being part of an EMP club allows students to connect with like-minded individuals, including peers, faculty members, and industry professionals. Networking can open doors to internships, job opportunities, and collaborations on innovative projects.</br></br>

        <strong>Collaborative Learning</strong>: EMP clubs foster a collaborative learning environment where students can share knowledge, ideas, and resources. This collaborative approach enhances the learning experience and encourages teamwork, a crucial skill in the professional world.</br></br>

    <strong>Exposure to Industry Trends</strong>: EMP clubs often organize events such as seminars, guest lectures, and industry visits, providing students with insights into the latest trends and advancements in electro-mechanical production. This exposure helps them stay updated on industry standards and practices.
            `
        }
        else if (data.includes('benefi')) {
            bdata = `
            EMP is beneficial because it helps in:
        </br></br>
            <strong>
            Integration of Multiple Disciplines:
            </strong></br>
            
            EMP integrates knowledge from different engineering disciplines, allowing professionals to design and create intelligent systems that combine mechanical, electronic, and software components.</br>
            <strong></br></br>
                Efficient System Design:
                </strong></br>
                EMP facilitates the efficient design of complex systems by considering the interaction of mechanical and electronic components. This integrated approach often leads to more streamlined and optimized solutions.
                `

        }
        else if (data.includes('full form') && data.includes('emp')) {

            bdata = 'Electro Mechanical Production'





        }
        else if (data.includes('why') && data.includes('emp') && data.includes('club')) {

            bdata = 'To enhance students learning , their interest towards mechatronics .'

        }
        else if (!data.includes('vice') && data.includes('president')) {
            bdata = `
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/manav.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Manav Jha is our president from 9th b</strong>
            </div>
            `
        }
        else if (data.includes('vice')) {
            bdata = `
            <div style='display:flex ; align-items: center;'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Vanshika Chauhan is our Vice-president from 9th-B</strong>
            </div>
            `
        }
        else if(data.includes('project manager')) {
            bdata = `
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/bubula.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Bablu Joshi is our Project manager from 9th-B</strong>
            </div>
            `
        }
        else if (data.includes('technical')) {
            bdata = `
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/dev.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Dev Raj is our Technical head from 9th-B</strong>
            </div>
            `
        }
        else if (data.includes('secretary')) {
            bdata = `
            <div style='display:flex ; align-items: center;'>
                <img src='https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Prakhar Mathur is our Club Secretary from 9th-C</strong>
            </div>
            `
        }
        else if (data.includes('event manager')) {
            bdata = `
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/harshit.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Harshit Sharma is our Event manager from 9th-B</strong>
            </div>
            `
        }
        else if (data.includes('co') && data.includes('ordinator')) {
            bdata = `
            <div style='display:flex ; align-items: center; margin-block:5px'>
                <img src='../asset/taiyaba.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Taiyaba is our Club coordinator 1 from 9th-B</strong>
            </div>
            <div style='display:flex ; align-items: center;'>
                <img src='../asset/ananya.jpeg' style = 'width : 100px; border-radius: 500px; margin-right: 10px'></img> <strong>Ananya Jha is our Club coordinator 2 from 9th-A</strong>
            </div>
            `
        }

        // else if (data.includes('mentor') || data.includes('teacher')) {
        //     bdata = `
        //     <div style='display:flex ; align-items: center; margin-block:5px'>
        //         <p style = 'width : 100px;height:100px ; border-radius: 500px; margin-right: 10px;background:url("../asset/shad.png");backgound-posiion:center 0px; background-size:contain'></p> <strong>Mr. Shad Qaiser</strong>
        //     </div>
        //     <div style='display:flex ; align-items: center;'>
        //         <p style = 'width : 100px;height:100px ; border-radius: 500px; margin-right: 10px;background:url("../asset/khalid.png");backgound-posiion:center 0px; background-size:cover'></p> <strong>Mr. Khalid</strong>
        //     </div>
        //     `
        // }
        else if (data.includes('elaborate') || data.includes('explain') && data.includes('it') || data.includes('breif') && data.includes('tell') || data.includes('more')) {
            bdata = 'Sorry to say, but I am not trained yet to give detailed explanation but you can refer to my given links. ✨'
        }
        else {
            function containsMechatronicsTerm(inputString) {
                return mechatronicsTerms.some(term => inputString.includes(term));
            }
            
            // Iterate through the chatbotRequests array
            for (let i = 0; i < chatbotRequests.length; i++) {
                // Check if the current item is present in the input string
                if (data.includes(chatbotRequests[i])) {
                    // Remove the item from the input string
                    data = data.replace(chatbotRequests[i], '');
                }
            }

            // Output the modified string
            console.log(data);


            const testString = 'This is a string with robotics and programming.';
            
            if (containsMechatronicsTerm(data)&&!containsEroticTerm(data)) {
                data = data.replace('emp', 'electro mechanical production')
                async function fetchData() {
                    try {
                        const apiKey = 'AIzaSyBaM9KVDHpGy4Dn9hXCPRLTBqU4pS_K9JI';
                        const apiKey2 = 'AIzaSyBw0QO3tbQSxSfnsrerqmkUbn81v_0lUYU';
                        const apiKey3 = 'AIzaSyBw0QO3tbQSxSfnsrerqmkUbn81v_0lUYU';
                        const cx = 'd7bb9924b7eaf4d64';
                        const cx2 = 'e10c244f810de4f17';
                        const cx3 = 'd799aaf09ae9440cc';
                        const query = data;

                        const apiUrl = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey}&cx=${cx}`;

                        const apiUrl2 = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey2}&cx=${cx2}`;

                        const apiUrl3 = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${apiKey3}&cx=${cx3}`;

                        const response = await fetch(apiUrl);

                        // }
                        // catch (error) {

                        //     response = await fetch(apiUrl2);

                        // }

                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }

                        const searchData = await response.json();

                        // Process the data and extract the most relevant answer
                        bdata = findMostRelevantResult(searchData.items);

                        if (bdata) {
                            console.log('Most Relevant Answer:', bdata.title);
                            console.log('Snippet:', bdata.snippet);
                            console.log('Link:', bdata.link);
                            localStorage.setItem('prev', bdata.link)
                            // Perform operations that depend on bdata here
                            snippet = bdata.htmlSnippet
                            refined_data = snippet.replace('...', '')

                            if (snippet.includes('Jan') || snippet.includes('Feb') || snippet.includes('Mar') || snippet.includes('Apr') || snippet.includes('May') || snippet.includes('Jun') || snippet.includes('Jul') || snippet.includes('Aug') || snippet.includes('Sep') || snippet.includes('Oct') || snippet.includes('Nov') || snippet.includes('Dec')) {

                                refined_data = snippet.slice(12)
                                refined_data = refined_data.replace('...', '')
                            }

                            console.log(refined_data)
                            createMsg('Mecha', '. . .', belem, id);

                            var typed = new Typed(`#completion${id}`, {
                                strings: [`${refined_data}</br> </br><strong>source:</strong></br> <a href='${bdata.link}' style='display: inline-block;
                                width: auto;
                                max-width: 300px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                text-wrap: nowrap;
                                background: rgb(240, 242, 245);
                                padding: 2.5px;
                                border-radius: 5px;
                                color: black;
                                text-decoration: none;
                                border: 0.5px solid rgb(100, 100, 100)'>${bdata.link}</a>`],
                                typeSpeed: 5,
                                cursorChar: '',
                                startDelay: 1000
                            });

                            // Continue with other operations that depend on bdata

                            id = id + 1;
                            window.scrollBy(0, 800);
                            data = '';
                        } else {
                            console.log('No relevant answer found.');
                        }
                    } catch (error) {
                        console.error('Error fetching search results:', error.message);

                    }
                }
                function findMostRelevantResult(results) {

                    return results && results.length > 0 ? results[0] : null;
                }
                // Call the asynchronous function
                fetchData();

            }
            else {
                bdata = 'I am a learing Bot and trained only to answer queries related to EMP. please fill your query in this <a href="https://forms.gle/8gbRRSdgeUfSfTAu7">form</a> if you feel we made a mistake guessing your prompt so my developer can update me. '
            }



        }


        createMsg('Mecha', '. . .', belem, id)
        var typed = new Typed(`#completion${id}`, {
            strings: [bdata],
            typeSpeed: 5,
            cursorChar: '',
            startDelay: 1000
        });
        id = id + 1
        window.scrollBy(0, 800);
        data = ''
    }

}
send.addEventListener('click', () => {
    generate()
})
document.addEventListener('keydown', function (event) {
    // Check if the pressed key is "Enter" or "NumpadEnter"
    if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        // Your code to handle the Enter key press goes here
        generate()
    }
});

