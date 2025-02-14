function checkQuiz() {
    let score = 0;

    let answers = {
        q1: "pink",     // Your favorite color
        q2: "bali",     // Your dream vacation spot
        q3: "chocolate" // Your go-to snack
    };

    let userAnswers = {
        q1: document.querySelector('input[name="q1"]:checked'),
        q2: document.querySelector('input[name="q2"]:checked'),
        q3: document.querySelector('input[name="q3"]:checked')
    };

    for (let key in userAnswers) {
        if (userAnswers[key] && userAnswers[key].value === answers[key]) {
            score++;
        }
    }

    if (score === 3) {
        window.location.href = "valentine.html"; // Redirect on perfect score
    } else {
        let resultMessage = `You got ${score} out of 3 right!`;
        if (score === 2) {
            resultMessage += " 😊 Pretty good, babe!";
        } else {
            resultMessage += " 😅 We need to spend more time together!";
        }
        document.getElementById("quizResult").innerText = resultMessage;
    }
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.AmbientLight(0xffffff, 1);
scene.add(light);
const directionalLight = new THREE.DirectionalLight(0xffaaff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

const loader = new THREE.GLTFLoader();
loader.load('models/heart.glb', (gltf) => {
const model = gltf.scene;
model.scale.set(2, 2, 2);
model.position.set(0, 0, 0);
scene.add(model);

function animate() {
requestAnimationFrame(animate);
model.rotation.y += 0.01;
renderer.render(scene, camera);
}
animate();
}, undefined, (error) => {
console.error('Error loading model:', error);
});

camera.position.z = 5;
window.addEventListener('resize', () => {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
});