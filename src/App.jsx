// App.jsx
import './App.css';
import Cards from "./components/Cards";


const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const flashcards = [
  { question: 'What is the purpose of the CPU in a computer?', answer: 'The CPU (Central Processing Unit) is the primary component responsible for executing instructions and performing calculations in a computer.'},
  { question: 'Define "Instruction Set Architecture (ISA)."', answer: ' ISA is a set of rules and conventions that dictate how software interacts with the hardware components of a computer, particularly the CPU.'},
  { question: 'What is the role of the ALU in the CPU?', answer: 'The Arithmetic Logic Unit (ALU) performs arithmetic and logical operations, such as addition, subtraction, and comparisons, within the CPU.'},
  { question: 'Explain the concept of "pipelining" in CPU design.', answer: 'Pipelining is a CPU design technique where multiple instructions are executed concurrently in different stages of the pipeline to improve performance.'},
  { question: 'What is the purpose of the cache memory in a computer system?', answer: 'Cache memory is used to store frequently accessed data and instructions to speed up CPU operations by reducing memory access times.'},
  { question: 'Define "von Neumann architecture."', answer: 'Von Neumann architecture is a computer design concept where both data and instructions are stored in the same memory, allowing for programmatic control of the CPU.'},
  { question: 'What is a "register" in computer architecture?', answer: 'Registers are small, high-speed storage locations within the CPU used to store data temporarily during processing.'},
  { question: 'Describe the difference between RISC and CISC architectures.', answer: 'RISC (Reduced Instruction Set Computer) has a simplified instruction set with a focus on executing instructions quickly, while CISC (Complex Instruction Set Computer) has a more extensive instruction set designed to perform complex operations in a single instruction.'},
  { question: 'What is the purpose of the Memory Management Unit (MMU)?', answer: 'The MMU is responsible for translating virtual memory addresses to physical memory addresses, enabling memory protection and efficient memory allocation.'},
  { question: 'Explain the concept of "endianess" in computer systems.', answer: 'Endianess refers to the way data is stored in memory. Big-endian systems store the most significant byte at the lowest memory address, while little-endian systems store it at the highest memory address.'},
];

function App() {
  const shuffledFlashcards = shuffleArray(flashcards);
  return (
    <div className="App">
      <h1>Computer Architecture Flashcards</h1>
      <Cards flashcards={shuffledFlashcards} />
    </div>
  );
}

export default App;
