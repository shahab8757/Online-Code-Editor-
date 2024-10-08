import { useEditor } from "../context/AppContext";
import CompileButton from "./CompileButton";
import Editor from "./Editor";

const ProgrammingEditor = () => {
  const { code, setCode, stdIn, setStdIn, output, language } = useEditor();

  return (
    <div className="flex flex-col w-4/5 gap-10 p-4 mx-auto mt-3">
      <section className="flex-grow h-[80vh]">
        <Editor language={language} code={code} setCode={setCode} />
      </section>

      <CompileButton />

      <section className="flex flex-col items-start justify-start gap-4">
        {/* Input area */}
        <div className="w-full">
          <h1 className="p-2 border border-b-0 border-borderPrimary text-textSecondary">
            Input
          </h1>

          <textarea
            name="input"
            id="input"
            className="w-full p-2 text-[14px] font-mono border border-borderPrimary bg-background resize-none focus:outline-none  text-white"
            cols="30"
            rows="5"
            value={stdIn}
            onChange={(e) => setStdIn(e.target.value)}
            spellCheck={false}
            autoCorrect={false}
          />
        </div>

        {/* Output area */}
        {output && (
          <div className="w-full">
            <div className="p-2 border border-b-0 border-borderPrimary text-textSecondary">
              Output
              <div className="flex items-center gap-5 mt-2 text-sm">
                <span>
                  <span className="text-white">Time</span> {output.cpuTime} sec
                </span>
                <span>
                  <span className="text-white">Mem</span> {output.memory} kB
                </span>
              </div>
            </div>
            <textarea
              name="output"
              id="output"
              className="w-full p-2 text-[14px] font-mono border border-borderPrimary bg-background resize-none focus:outline-none text-white"
              cols="30"
              rows="8"
              value={output.output}
              readOnly
              spellCheck={false}
            />
          </div>
        )}
      </section>
    </div>
  );
};

export default ProgrammingEditor;
