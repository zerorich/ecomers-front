import Main from './components/Main';
import Section from './components/Section';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';

export default function Page() {
  return (
    <main className="px-6 py-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <Main />
        <Section />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </main>
  );
}