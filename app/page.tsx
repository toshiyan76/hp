import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* ヒーローセクション */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white min-h-[60vh] flex items-center justify-center">
          <div className="container mx-auto max-w-6xl px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 text-center lg:text-left">
                <h1 className="text-5xl font-bold leading-tight">
                  AIと共にすべての企業に成長の機会を
                </h1>
                <p className="text-xl opacity-90">
                  CoreNovaは、最新のAI技術を活用して中小企業の成長を支援します。
                </p>
                <div>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 text-lg">
                    無料相談を申し込む
                  </Button>
                </div>
              </div>
              <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/hero-image.png"
                  alt="AIを活用したデータ分析の様子。モニター上には青く光る未来的なデータビジュアライゼーションが表示されており、ヘッドフォンを着用した専門家が作業を行っています。"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ミッション */}
        <section id="mission" className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-10">ミッション</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl font-semibold mb-4">
                「AIの力で、すべての企業に成長の機会を」
              </p>
              <p className="text-gray-700">
                私たちは、最新のAI技術を誰もが活用できるようにすることで、
                企業の成長と人々の働き方を進化させ、持続可能な事業発展を実現します。
              </p>
            </div>
          </div>
        </section>

        {/* ビジョン */}
        <section id="vision" className="bg-gray-50 py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-10">ビジョン</h2>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xl font-semibold mb-4">
                「2030年までに、10,000社の中小企業のAI実装を支援する」
              </p>
              <ul className="text-left list-disc list-inside space-y-2 text-gray-700">
                <li>すべての企業がAIを当たり前に活用できる社会を創る</li>
                <li>経営者と従業員の双方が、より創造的な仕事に専念できる環境を実現する</li>
                <li>中小企業のデジタル競争力を世界水準に高める</li>
              </ul>
            </div>
          </div>
        </section>

        {/* バリュー */}
        <section id="values" className="py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-10">バリュー</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Innovation First", description: "常に最新のAI技術と向き合い、実践的な活用方法を追求します。" },
                { title: "Real Solutions", description: "理論より実践を重視し、具体的な成果を生み出します。" },
                { title: "Together we grow", description: "お客様と共に学び、共に成長します。" },
                { title: "Ethics & Trust", description: "AIの倫理的な活用を推進し、顧客の信頼を何よりも大切にします。" }
              ].map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* サービス紹介 */}
        <section id="services" className="bg-blue-50 py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <h2 className="text-3xl font-bold text-center mb-10">サービス</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "AI導入コンサルティング", description: "企業の課題に合わせたAI導入戦略を策定します。" },
                { title: "カスタムAIソリューション開発", description: "企業固有のニーズに応じたAIソリューションを開発します。" },
                { title: "AI活用トレーニング", description: "従業員向けのAI活用スキル向上プログラムを提供します。" }
              ].map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* お問い合わせフォーム */}
        <section id="contact" className="py-20">
          <div className="container mx-auto max-w-2xl px-4">
            <h2 className="text-3xl font-bold text-center mb-10">お問い合わせ</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  メールアドレス
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  お問い合わせ内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800">
                送信する
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

