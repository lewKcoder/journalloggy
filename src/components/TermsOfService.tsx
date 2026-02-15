import { ArrowLeft } from "lucide-react";
import type { Project } from "../types/post";

interface TermsOfServiceProps {
  isDarkMode: boolean;
  project: Project;
  onBack: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({
  isDarkMode,
  project,
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
        利用規約 — {project.name}
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
          <h2>第1条（適用）</h2>
          <p>
            本利用規約（以下「本規約」）は、Journalloggy（以下「当サービス」）が提供するChrome拡張機能「OSHI」およびこれに付随するサービス（以下「本サービス」）の利用条件を定めるものです。ユーザーは本規約に同意の上、本サービスをご利用ください。
          </p>
        </section>

        <section>
          <h2>第2条（定義）</h2>
          <p>本規約において使用する用語の定義は、以下の通りとします。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              「本サービス」とは、当サービスが提供するChrome拡張機能「OSHI」およびそれに関連するすべてのサービスを指します。
            </li>
            <li>
              「ユーザー」とは、本サービスを利用するすべての個人を指します。
            </li>
            <li>
              「有料プラン」とは、月額料金を支払うことで利用可能となる機能を指します。
            </li>
          </ul>
        </section>

        <section>
          <h2>第3条（サービス内容）</h2>
          <p>
            本サービスは、ブラウザ上でお気に入り画像を表示するChrome拡張機能を提供します。有料プランでは、追加機能をご利用いただけます。
          </p>
        </section>

        <section>
          <h2>第4条（利用料金・支払い）</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>有料プランの月額料金は298円（税込）です。</li>
            <li>決済はStripeを通じて処理されます。</li>
            <li>料金は毎月自動的に課金されます。</li>
            <li>料金の変更がある場合は、事前にユーザーに通知します。</li>
          </ul>
        </section>

        <section>
          <h2>第5条（解約・返金）</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>ユーザーはいつでも有料プランを解約できます。</li>
            <li>
              解約後も、当該課金期間の終了時まで有料機能をご利用いただけます。
            </li>
            <li>日割り計算による返金は行いません。</li>
            <li>
              サービス側の不具合により利用できなかった期間がある場合は、合理的な範囲で対応を検討いたします。
            </li>
            <li>
              本サービスはデジタルコンテンツの提供であるため、クーリングオフ制度の適用対象外となります。
            </li>
          </ul>
        </section>

        <section>
          <h2>第6条（禁止事項）</h2>
          <p>ユーザーは、以下の行為を行ってはなりません。</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>法令または公序良俗に違反する行為</li>
            <li>本サービスの運営を妨害する行為</li>
            <li>本サービスのリバースエンジニアリング、改変、再配布</li>
            <li>第三者のアカウントを不正に使用する行為</li>
            <li>その他、当サービスが不適切と判断する行為</li>
          </ul>
        </section>

        <section>
          <h2>第7条（免責事項）</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              当サービスは、本サービスの完全性、正確性、有用性等について保証しません。
            </li>
            <li>
              当サービスに故意または重大な過失がある場合を除き、本サービスの利用により生じた損害について、当サービスは責任を負いません。当サービスに故意または重大な過失がある場合の賠償額は、当該ユーザーが過去1ヶ月間に支払った利用料金の額を上限とします。
            </li>
            <li>
              当サービスは、事前の通知なく本サービスの内容を変更、または提供を中止することがあります。
            </li>
          </ul>
        </section>

        <section>
          <h2>第8条（知的財産権）</h2>
          <p>
            本サービスに関する知的財産権は、すべて当サービスの運営者に帰属します。ユーザーは、本サービスを利用する権利のみを有し、知的財産権を取得するものではありません。
          </p>
        </section>

        <section>
          <h2>第9条（ユーザーコンテンツ）</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              ユーザーが本サービスにアップロードまたは設定した画像等のコンテンツ（以下「ユーザーコンテンツ」）の著作権は、ユーザーまたは当該コンテンツの権利者に帰属します。
            </li>
            <li>
              当サービスは、ユーザーコンテンツを本サービスの提供（保存・表示）に必要な範囲でのみ利用し、それ以外の目的に使用しません。
            </li>
            <li>
              ユーザーは、自身が正当な権利を有するコンテンツのみをアップロードするものとします。第三者の著作権その他の権利を侵害するコンテンツのアップロードは禁止します。
            </li>
            <li>
              ユーザーコンテンツが第三者の権利を侵害している場合、当サービスは事前の通知なく当該コンテンツを削除できるものとします。これにより生じた損害について、当サービスは責任を負いません。
            </li>
          </ul>
        </section>

        <section>
          <h2>第10条（規約の変更）</h2>
          <p>
            当サービスは、必要に応じて本規約を変更することがあります。料金の改定その他ユーザーに重大な影響を及ぼす変更を行う場合は、変更の効力発生日の30日前までに、メールまたは本サービス上での通知によりユーザーにお知らせします。その他の変更については、本ページに掲載した時点で効力を生じるものとします。
          </p>
        </section>

        <section>
          <h2>第11条（準拠法・管轄裁判所）</h2>
          <p>
            本規約の解釈にあたっては日本法を準拠法とします。本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>
        </section>

        <section
          className={`mt-12 pt-8 border-t ${
            isDarkMode ? "border-neutral-800" : "border-neutral-200"
          }`}
        >
          <h2>お問い合わせ</h2>
          <p>本規約に関するお問い合わせは、以下の連絡先までご連絡ください。</p>
          <p>
            メール:{" "}
            <a
              href="mailto:oculay3e7@gmail.com"
              className="underline underline-offset-4"
            >
              oculay3e7@gmail.com
            </a>
          </p>
        </section>
      </div>
    </article>
  );
};
