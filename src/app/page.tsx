import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <section className="max-w-4xl bg-yellow-300 p-10 rounded-xl flex flex-col items-center gap-10">
        <div className="bg-yellow-500 text-center max-w-fit py-5 px-10 rounded-xl">
          <h1 className="text-4xl">Beary's Breakfast Bar</h1>
        </div>
        <div className="bg-yellow-500 text-left max-w-fit py-5 px-10 rounded-xl">
          <p className="py-4">
            Beary's has the best porridge! The atmosphere and customer service
            make you feel like you are sitting in the middle of the woods,
            eating like a bear! This is exactly the kind of place that I like to
            return to again and again.
          </p>
          <h3 className="text-xl px-10">Goldilocks</h3>
        </div>
        <div className="bg-yellow-500 text-center max-w-fit py-5 px-10 rounded-xl">
          <h2 className="text-2xl text-left">Hours</h2>
          <p>Sunday: 8am - 8pm</p>
          <p>Monday: 6am - 6pm</p>
          <p>Tuesday: 6am - 6pm</p>
          <p className="px-10">Wednesday: 6am - 6pm</p>
          <p>Thursday: 6am - 10pm</p>
          <p>Friday: 6am - 10pm</p>
          <p>Saturday: 8am - 10pm</p>
        </div>
        <div className="bg-yellow-500 text-center max-w-fit py-5 px-10 rounded-xl">
          <h2 className="text-2xl text-left">Location</h2>
          <p className="px-10">123 Forest Drive, Forestville, Maine</p>
        </div>
      </section>
    </main>
  );
}
