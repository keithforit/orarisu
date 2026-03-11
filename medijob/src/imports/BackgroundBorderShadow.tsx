function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#94a3b8] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">Total Reach</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative w-full">
        <Container />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex font-['Inter:Bold',sans-serif] font-bold gap-[8px] items-baseline leading-[0] not-italic relative shrink-0 w-full" data-name="Paragraph">
      <div className="flex flex-col h-[32px] justify-center relative shrink-0 text-[#0f172a] text-[24px] w-[71.7px]">
        <p className="leading-[32px]">1.24M</p>
      </div>
      <div className="flex flex-col h-[15px] justify-center relative shrink-0 text-[#10b981] text-[10px] w-[37.66px]">
        <p className="leading-[15px]">+12.4%</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f8fafc] h-[4px] relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute bg-[#1a1a1a] inset-[0_30.01%_0_0]" data-name="Background" />
      </div>
    </div>
  );
}

export default function BackgroundBorderShadow() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[25px] relative rounded-[16px] size-full" data-name="Background+Border+Shadow">
      <div aria-hidden="true" className="absolute border border-[#f1f1f3] border-solid inset-0 pointer-events-none rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]" />
      <Margin />
      <Margin1 />
      <Background />
    </div>
  );
}