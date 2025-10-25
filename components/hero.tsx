import Image from "next/image";

const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-purple-950 to-black text-gray-100 pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24">
        <div className="grid gap-8 items-center grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-purple-900/40 text-sm font-medium text-purple-300 w-max">
              Genshin Impact
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-purple-200 drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]">
              Yelan
            </h1>

            <p className="text-gray-400 max-w-2xl md:text-lg italic">
              She is a mysterious person who claims to work for the Ministry of
              Civil Affairs, but comes out as a non-entity on their list. She
              also claims to work for the Yanshang Teahouse, but only uses it
              for her true job, an intelligence agent collaborating with
              Ningguang.
            </p>

            <div className="flex gap-4 mt-4">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium bg-purple-900/40 hover:bg-purple-800/50"
              >
                See Product...
              </a>
            </div>
          </div>

          <div className="relative w-full flex items-center justify-center">
            <div className="relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-purple-900/50">
              <Image
                src="/Hero.png"
                alt="hero image"
                width={1200}
                height={800}
                className="object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[420px]"
                priority
              />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            <div className="absolute bottom-3 right-3 sm:right-9 hidden md:block">
              <div className="bg-purple-950/60 backdrop-blur-md rounded-2xl p-3 min-w-[220px] shadow-lg border border-purple-800/40">
                <div className="flex items-center gap-3">
                  <div className="text-left">
                    <p className="text-xs text-gray-400">Lorem, ipsum.</p>
                    <p className="font-medium text-purple-200">
                      Lorem • Rp99.999
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
