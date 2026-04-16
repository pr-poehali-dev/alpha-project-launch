const advantages = [
  { emoji: "⚔️", title: "Все вовлечены", desc: "Каждый гость — участник, а не зритель" },
  { emoji: "🔥", title: "Драйв и азарт", desc: "Командные испытания, интерактив с ведущими, финал с наградой" },
  { emoji: "🏆", title: "Эффект «Вау»", desc: "Ваши гости запомнят этот праздник надолго" },
  { emoji: "🎉", title: "Под ключ", desc: "Мы берём всю организацию на себя — вы просто приходите и отдыхаете" },
];

export default function Featured() {
  return (
    <div id="about" className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="/images/woman-horse.jpg"
          alt="Форт Боярд шоу"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Почему выбирают нас</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Не просто праздник — настоящее приключение, где каждый становится героем.
        </p>
        <div className="flex flex-col gap-6 mb-10">
          {advantages.map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="text-2xl">{item.emoji}</span>
              <div>
                <p className="font-semibold text-neutral-900">{item.title}</p>
                <p className="text-neutral-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Узнать подробнее
        </button>
      </div>
    </div>
  );
}