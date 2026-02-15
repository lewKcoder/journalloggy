import { ArrowLeft } from "lucide-react";

interface PrivacyPolicyProps {
  isDarkMode: boolean;
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({
  isDarkMode,
  onBack,
}) => {
  return (
    <article className="animate-in">
      <button
        onClick={onBack}
        className={`group flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] mb-12 transition-colors ${
          isDarkMode
            ? "text-neutral-500 hover:text-white"
            : "text-neutral-400 hover:text-neutral-900"
        }`}
      >
        <ArrowLeft
          size={14}
          className="group-hover:-translate-x-1 transition-transform"
        />
        <span>Back</span>
      </button>

      <h1 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
        プライバシーポリシー
      </h1>
      <p
        className={`text-sm mb-12 ${
          isDarkMode ? "text-neutral-500" : "text-neutral-400"
        }`}
      >
        最終更新日: 2026年2月15日
      </p>

      <div
        className={`prose-custom space-y-8 text-[15px] leading-relaxed ${
          isDarkMode ? "text-neutral-300" : "text-neutral-700"
        }`}
      >
        <section>
          <h2>はじめに</h2>
          <p>
            Journalloggy（以下「当サービス」）は、Chrome拡張機能「OSHI」（以下「本サービス」）の提供にあたり、ユーザーのプライバシーを尊重し、個人情報の保護に努めます。本プライバシーポリシーは、当サービスが収集する情報、その利用目的、および保護方法について説明します。
          </p>
        </section>

        <section>
          <h2>1. 収集する情報</h2>
          <p>当サービスは、以下の情報を収集する場合があります。</p>
          <h3 className="font-bold mt-4 mb-2">（1）アカウント情報</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>メールアドレス（サブスクリプション管理のため）</li>
            <li>決済に関する情報（Stripeを通じて処理され、当サービスはカード番号等を直接保存しません）</li>
          </ul>
          <h3 className="font-bold mt-4 mb-2">（2）利用データ</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>拡張機能の利用状況に関する匿名化されたデータ</li>
            <li>エラーレポート（サービス改善のため）</li>
          </ul>
          <h3 className="font-bold mt-4 mb-2">（3）Cookieおよび類似技術</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>当ウェブサイトでは、サービス提供に必要なCookieを使用する場合があります</li>
          </ul>
        </section>

        <section>
          <h2>2. 情報の利用目的</h2>
          <p>収集した情報は、以下の目的で利用します。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>本サービスの提供・維持・改善</li>
            <li>サブスクリプションの管理・決済処理</li>
            <li>ユーザーサポートの提供</li>
            <li>サービスに関する重要な通知の送信</li>
            <li>不正利用の防止</li>
          </ul>
        </section>

        <section>
          <h2>3. 情報の第三者提供</h2>
          <p>
            当サービスは、以下の場合を除き、ユーザーの個人情報を第三者に提供しません。
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>ユーザーの同意がある場合</li>
            <li>法令に基づき開示が必要な場合</li>
            <li>決済処理のためStripeに必要な情報を提供する場合</li>
          </ul>
        </section>

        <section>
          <h2>4. 第三者サービス</h2>
          <p>当サービスは、以下の第三者サービスを利用しています。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Stripe</strong> — 決済処理。Stripeのプライバシーポリシーは{" "}
              <a
                href="https://stripe.com/jp/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                https://stripe.com/jp/privacy
              </a>{" "}
              をご参照ください。
            </li>
            <li>
              <strong>Supabase</strong> — データベースおよび認証基盤
            </li>
          </ul>
        </section>

        <section>
          <h2>5. データの保管・セキュリティ</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ユーザーの情報は適切なセキュリティ対策を講じて保管します。</li>
            <li>決済情報はStripeが管理しており、当サービスはカード番号等の機密情報を直接保管しません。</li>
            <li>データへの不正アクセス、紛失、破壊を防止するための合理的な措置を講じています。</li>
          </ul>
        </section>

        <section>
          <h2>6. ユーザーの権利</h2>
          <p>ユーザーは、以下の権利を有します。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>自身の個人情報の開示を請求する権利</li>
            <li>個人情報の訂正・削除を請求する権利</li>
            <li>サブスクリプションをいつでも解約する権利</li>
            <li>マーケティング目的のメール配信を停止する権利</li>
          </ul>
          <p>
            これらの権利を行使する場合は、下記の連絡先までご連絡ください。
          </p>
        </section>

        <section>
          <h2>7. 未成年者のプライバシー</h2>
          <p>
            本サービスは16歳未満の方を対象としていません。16歳未満の方が個人情報を提供したことが判明した場合、速やかに該当情報を削除します。
          </p>
        </section>

        <section>
          <h2>8. ポリシーの変更</h2>
          <p>
            当サービスは、本プライバシーポリシーを随時更新する場合があります。変更がある場合は、本ページに掲載することでお知らせします。重要な変更がある場合は、メール等で通知いたします。
          </p>
        </section>

        <section
          className={`mt-12 pt-8 border-t ${
            isDarkMode ? "border-neutral-800" : "border-neutral-200"
          }`}
        >
          <h2>お問い合わせ</h2>
          <p>
            プライバシーに関するお問い合わせは、以下の連絡先までご連絡ください。
          </p>
          <p>
            メール:{" "}
            <a
              href="mailto:your-email@gmail.com"
              className="underline underline-offset-4"
            >
              your-email@gmail.com
            </a>
          </p>
        </section>
      </div>
    </article>
  );
};
