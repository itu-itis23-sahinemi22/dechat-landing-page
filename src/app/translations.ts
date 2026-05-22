export type Lang = 'tr' | 'en';

export const t = {
  tr: {
    nav: {
      features: 'Özellikler',
      howItWorks: 'Nasıl Çalışır',
      faq: 'SSS',
      contact: 'İletişim',
      download: 'İndir (Yakında)',
    },
    hero: {
      title: ['Mesajlaş.', 'Transfer et.', 'Yönet.'],
      subtitle: 'Alıştığın sadelikte iletişim, DeFi gücünde finans.',
      desc: 'Mesajlaşırken para gönder, para gönderirken mesajlaş — güvenli ve şifreli, tek uygulamada.',
      appStore: "App Store'dan İndir",
      googlePlay: "Google Play'den İndir",
      tryWeb: 'Web Uygulamasını Aç →',
      exploreFeatures: 'Özellikleri Keşfet →',
    },
    features: {
      pageTitle: 'Özellikler',
      pageSubtitle: 'Blokzincir\'in gücünü alışık olduğun sadelikte kullan.',
      items: [
        {
          badge: 'Güvenli Mesajlaşma',
          title: 'Sansürlenemez,\n%100 Şifreli İletişim',
          desc: "XMTP protokolü ile cüzdanlar arası uçtan uca şifreli mesajlaşma. Blockchain'e veri yazma maliyeti olmadan, hiç kimse mesajlarını okuyamaz.",
          detail: 'Her mesaj cüzdan anahtarınızla şifrelenir — merkezi sunucu yok.',
        },
        {
          badge: 'Sohbet İçi Transfer',
          title: 'Fotoğraf Gönderir\nGibi Kripto Gönder',
          desc: "Gönder butonuna tıkla, miktarı gir, onayla — işte bu kadar. ETH, USDT veya NFT'yi sohbet akışından çıkmadan gönder.",
          detail: 'Base L2 üzerinde düşük gas ücreti, anında kesinleşme.',
        },
        {
          badge: 'Sosyal Portföy',
          title: 'Konuştuğun Kişinin\nVarlıklarını Gör',
          desc: 'İzin verilen ölçüde, sohbet penceresinde karşı tarafın NFT ve token portföyünü görüntüle. Dijital kimliğini sosyal hale getir.',
          detail: 'Alchemy API ile gerçek zamanlı portföy verisi.',
        },
      ],
    },
    howItWorks: {
      pageTitle: 'Nasıl Çalışır?',
      pageSubtitle: 'Üç adımda başla, dakikalar içinde hazır.',
      steps: [
        {
          num: '01',
          title: 'Sosyal veya Cüzdan ile Bağlan',
          desc: 'Email, Google veya herhangi bir kripto cüzdanıyla saniyeler içinde giriş yap. Akıllı cüzdan otomatik oluşturulur, gas ücreti ödemeden işlem yapabilirsin.',
        },
        {
          num: '02',
          title: 'Mesajlaşmaya Başla',
          desc: 'Kullanıcı adıyla ara, anında şifreli sohbet başlat. Tüm mesajlar uçtan uca şifreli ve sansürlenemez.',
        },
        {
          num: '03',
          title: 'Transfer Et',
          desc: 'Sohbet içinden tek tıkla kripto gönder. İşlem geçmişi mesaj balonu olarak kalıcı kayıt altında.',
        },
      ],
      cta: 'Hemen İndir',
    },
    faq: {
      pageTitle: 'SSS',
      pageSubtitle: 'Aklındaki soruların cevapları burada.',
      items: [
        {
          q: 'Uygulamaya nasıl giriş yaparım?',
          a: 'Google hesabınız, e-posta adresiniz veya MetaMask gibi herhangi bir kripto cüzdanınızla giriş yapabilirsiniz. Google veya e-posta tercih ederseniz arka planda otomatik olarak bir akıllı sözleşme cüzdanı oluşturulur. Harici bir cüzdanla bağlanırsanız, o cüzdan doğrudan hesabınız olur.',
        },
        {
          q: 'Cüzdan nedir?',
          a: 'Kripto dünyasında cüzdan, banka hesabınız gibi düşünebileceğiniz bir dijital kimlik ve adrestir. Para tutmak, göndermek ve almak için kullanılır. Özünde iki şeyden oluşur: herkese açık adresiniz (IBAN\'ınız gibi) ve yalnızca sizde bulunan özel anahtarınız. DeChat\'te e-posta veya Google ile giriş yaptığınızda arka planda otomatik olarak bir cüzdan oluşturulur; ayrıca MetaMask gibi mevcut bir cüzdanınızla da bağlanabilirsiniz.',
        },
        {
          q: 'Telefon numaramı veya gerçek adımı paylaşmak zorunda mıyım?',
          a: 'Hayır. DeChat\'te gerçek kimliğinizi açıklamanıza gerek yoktur. Yalnızca bir kullanıcı adı seçmeniz yeterlidir; telefon numarası, gerçek ad veya adres bilgisi istenmez.',
        },
        {
          q: 'Hayatımda hiç kripto para kullanmadım. Yine de uygulamayı kullanmalı mıyım?',
          a: 'Evet! DeChat\'i yalnızca güvenli bir mesajlaşma uygulaması olarak kullanabilirsiniz; kripto özelliklerine hiç dokunmak zorunda değilsiniz. E-posta veya Google hesabınızla saniyeler içinde giriş yapıp şifreli mesajlaşmaya hemen başlayabilirsiniz.',
        },
        {
          q: 'Mesajlarım nasıl güvenli?',
          a: 'Tüm mesajlar, yalnızca sizin ve karşı tarafın çözebileceği anahtarlarla uçtan uca şifrelenir. DeChat dahil hiç kimse mesajlarınızı okuyamaz. Şifreleme cüzdan anahtarlarınız üzerinden yapıldığı için sunucudan bağımsız çalışır.',
        },
        {
          q: 'Hesabım hacklense ne olur? Mesajlarım ele geçirilebilir mi?',
          a: 'Mesajlarınız uçtan uca şifreli olduğundan, şifreleme anahtarlarınıza erişilmeden içeriklerine ulaşılamaz. Anahtarlarınız cüzdan özel anahtarınızdan türetilir ve yalnızca sizin cihazınızda bulunur; hiçbir sunucuda saklanmaz. Bu nedenle olası bir sunucu ihlali mesajlarınızı etkilemez. Bununla birlikte, cihazınızın veya özel anahtarınızın ele geçirilmesi durumunda mesajlar risk altına girebilir; bu yüzden cihaz güvenliğinize dikkat etmenizi öneririz.',
        },
        {
          q: 'Uygulamayı silersem mesajlarım kaybolur mu?',
          a: 'Hayır. Mesajlarınız XMTP ağında merkeziyetsiz olarak depolandığından, uygulamayı silseniz bile varlıklarını sürdürür. Uygulamayı yeniden yüklediğinizde aynı hesapla giriş yaparak tüm mesaj geçmişinize erişebilirsiniz.',
        },
        {
          q: 'Birden fazla cihazdan kullanabilir miyim?',
          a: 'Evet, aynı hesabınıza en fazla 10 farklı cihazdan erişebilirsiniz. Yeni bir cihazda giriş yaptığınızda, güvenlik doğrulaması için mevcut cihazlarınızdan birinde onay vermeniz istenebilir.',
        },
        {
          q: 'Bildirimleri nasıl yönetirim?',
          a: 'Ayarlar → Bildirimler menüsünden yeni mesaj, transfer ve sistem bildirimlerini ayrı ayrı açıp kapatabilirsiniz.',
        },
        {
          q: 'Hangi ağlar ve tokenlar destekleniyor?',
          a: 'Şu an için yalnızca Base ağı desteklenmektedir. ETH ve USDT başta olmak üzere Base üzerindeki tokenlar transfer edilebilir. İlerleyen dönemde daha fazla ağ ve token desteği eklenecektir.',
        },
        {
          q: 'Kripto para transferi nasıl yaparım?',
          a: 'Sohbet ekranındaki "Gönder" butonuna tıklayın, miktarı girin ve onaylayın. Transfer için küçük bir işlem ücreti ödenir — banka havalesi veya EFT komisyonuna benzer şekilde, bu ücret ağı işleten bilgisayarlara gider, DeChat\'e değil. DeChat, Base ağını kullandığı için bu ücret genellikle birkaç sent düzeyindedir.',
        },
        {
          q: 'Uygulamaya herhangi bir ücret ödeyecek miyim?',
          a: 'Mesajlaşma tamamen ücretsizdir. Kripto gönderirken yalnızca ağ işlem ücreti (gas) ödersiniz; bu DeChat\'e değil blokzincir ağına gider. Bunun dışında yalnızca Swap işlemlerinde küçük bir platform komisyonu alınır.',
          links: { Swap: '#q14' },
        },
        {
          q: 'DeChat nasıl para kazanıyor?',
          a: 'DeChat, yalnızca Swap işlemleri üzerinden küçük bir komisyon alır. Mesajlaşma ve kripto transferleri tamamen ücretsizdir. Elinizdeki tokenla ödeme yapamıyorsanız önce bir Swap yaparak ihtiyacınız olan tokena geçiş sağlayabilirsiniz.',
          links: { Swap: '#q14' },
        },
        {
          q: 'Swap nedir?',
          a: 'Swap, bir kripto parayı başka bir kripto parayla değiştirmektir. Örneğin elinizdeki ETH\'yi USDT\'ye çevirebilirsiniz. DeChat bu işlem için küçük bir aracılık komisyonu alır.',
        },
        {
          q: 'Harici cüzdanımda kripto para var ancak uygulamada göremiyorum. Neden?',
          a: 'DeChat, kullanım kolaylığı için akıllı sözleşme cüzdanı (SCW) kullanır. MetaMask gibi uygulamalardaki standart cüzdanınız (EOA) ile SCW\'niz farklı adreslerdir, dolayısıyla varlıklar otomatik görünmez. Aktarmak için: Ayarlar → Cüzdan → EOA\'dan Aktar adımlarını izleyin. Dilediğinizde SCW\'den EOA\'ya geri aktarım da aynı menüden kolayca yapılabilir.',
          links: { SCW: '#q16' },
        },
        {
          q: 'SCW nedir?',
          a: 'SCW (Smart Contract Wallet / Akıllı Sözleşme Cüzdanı), blokzincir üzerinde çalışan ve standart cüzdanlara kıyasla ek özellikler sunan bir cüzdan türüdür. Gas sponsorluğu, sosyal kurtarma ve toplu işlemler gibi kullanıcı dostu özellikler sağlar. DeChat, giriş yaptığınızda otomatik olarak sizin için bir SCW oluşturur.',
        },
        {
          q: 'Kullanıcı adımı yanlış koydum. Ne yapmalıyım?',
          a: 'Kullanıcı adları blokzincire kalıcı olarak yazıldığından değiştirilemez. Bu, merkeziyetsiz sistemlerde kasıtlı bir tasarım kararıdır: hiç kimse başkasının kimliğini ele geçirip değiştiremez. Farklı bir kullanıcı adı için yeni bir e-posta veya hesapla yeni bir hesap açmanız gerekir.',
        },
        {
          q: 'Merkeziyetsizlik nedir?',
          a: 'Merkeziyetsizlik, bir hizmetin tek bir şirket veya sunucu yerine binlerce bağımsız bilgisayar tarafından işletilmesi anlamına gelir. Bu sayede kimse hizmeti kapatamaz, sansürleyemez veya verilerinize el koyamaz.',
        },
        {
          q: 'DeChat nasıl merkeziyetsiz oluyor?',
          a: 'DeChat, mesajlaşma için XMTP protokolünü, transferler için Base blokzincirini kullanır. Mesajlarınız merkezi bir sunucuda değil, dağıtık bir ağda şifreli olarak tutulur. Hesabınız bir e-posta şirketine veya uygulama mağazasına değil, yalnızca sizin cüzdan anahtarınıza aittir.',
        },
        {
          q: 'DeChat açık kaynak mı?',
          a: 'Şu an için değil; ancak DeChat\'in üzerine inşa edildiği XMTP protokolü ve Base blokzinciri gibi temel teknolojiler açık kaynak ve denetlenebilir yapıdadır. DeChat\'i kaynak kodunu görmeden doğrulamak isteyenler bu altyapı bileşenlerini inceleyebilir.',
        },
      ],
    },
    contact: {
      pageTitle: 'Bize Ulaşın',
      subtitle: 'Soru, öneri veya iş birliği için yazın.',
      emailLabel: 'E-posta',
      emailDesc: 'En kısa sürede yanıt veririz.',
      email: 'info@dechat.tech',
      form: {
        name: 'Ad Soyad',
        namePlaceholder: 'Adınızı girin',
        email: 'E-posta',
        emailPlaceholder: 'ornek@email.com',
        message: 'Mesaj',
        messagePlaceholder: 'Mesajınızı buraya yazın...',
        submit: 'Gönder',
      },
    },
    footer: {
      tagline: 'Merkeziyetsiz mesajlaşma platformu',
      rights: '2026 DeChat',
      networkActive: 'Ağ İnaktif (Yakında!)',
      links: ['Özellikler', 'Nasıl Çalışır', 'SSS', 'İndir', 'İletişim'],
    },
  },
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      faq: 'FAQ',
      contact: 'Contact',
      download: 'Download (Soon)',
    },
    hero: {
      title: ['Chat.', 'Transfer.', 'Manage.'],
      subtitle: 'Messaging as familiar as ever, finance as powerful as DeFi.',
      desc: 'Send money while you chat, chat while you send — secure, encrypted, all in one app.',
      appStore: 'Download on App Store',
      googlePlay: 'Get it on Google Play',
      tryWeb: 'Open Web App →',
      exploreFeatures: 'Explore Features →',
    },
    features: {
      pageTitle: 'Features',
      pageSubtitle: 'Harness the power of blockchain with the simplicity you know.',
      items: [
        {
          badge: 'Secure Messaging',
          title: '100% Encrypted,\nUncensorable',
          desc: "End-to-end encrypted messaging via the XMTP protocol. No blockchain write costs — nobody can read your messages.",
          detail: 'Every message is encrypted with your wallet key. No central server.',
        },
        {
          badge: 'In-Chat Payments',
          title: 'Send Crypto Like\nSending a Photo',
          desc: "Tap send, enter amount, confirm — done. Send ETH, USDT, or NFTs without leaving your chat.",
          detail: 'Low gas fees on Base L2 with instant finality.',
        },
        {
          badge: 'Social Portfolio',
          title: "See Your Contact's\nDigital Assets",
          desc: "With permission, view the NFT and token portfolio of who you're chatting with — right in the chat window.",
          detail: 'Real-time portfolio data powered by Alchemy API.',
        },
      ],
    },
    howItWorks: {
      pageTitle: 'How It Works',
      pageSubtitle: 'Get started in three steps, ready in minutes.',
      steps: [
        {
          num: '01',
          title: 'Connect via Social or Wallet',
          desc: 'Sign in with email, Google, or any crypto wallet in seconds. A smart wallet is created automatically — no gas fees needed to get started.',
        },
        {
          num: '02',
          title: 'Start Messaging',
          desc: 'Search by username and start an encrypted conversation instantly. All messages are E2EE and uncensorable.',
        },
        {
          num: '03',
          title: 'Transfer Assets',
          desc: 'Send crypto from the chat with one tap. Transaction history is logged permanently as message bubbles.',
        },
      ],
      cta: 'Download Now (Soon)',
    },
    faq: {
      pageTitle: 'FAQ',
      pageSubtitle: 'Everything you need to know, answered.',
      items: [
        {
          q: 'How do I sign in?',
          a: 'You can sign in with your Google account, email address, or any crypto wallet such as MetaMask. If you choose Google or email, a Smart Contract Wallet is automatically created for you in the background. If you connect an external wallet, that wallet becomes your account directly.',
        },
        {
          q: 'What is a wallet?',
          a: "In the crypto world, a wallet is your digital identity and address — think of it like a bank account. It's used to hold, send, and receive assets. At its core it's two things: your public address (like an IBAN) and your private key that only you hold. When you sign in with email or Google on DeChat, a wallet is automatically created for you in the background — you can also connect an existing wallet like MetaMask.",
        },
        {
          q: 'Do I have to share my phone number or real name?',
          a: "No. DeChat doesn't require you to reveal your real identity. You only need to choose a username — no phone number, real name, or address is ever asked for.",
        },
        {
          q: "I've never used crypto. Should I still use the app?",
          a: "Absolutely! You can use DeChat purely as a secure messaging app — you don't have to touch the crypto features at all. Just sign in with your email or Google account and start messaging in seconds.",
        },
        {
          q: 'How are my messages kept secure?',
          a: 'All messages are end-to-end encrypted with keys only you and your contact can unlock. Not even DeChat can read your messages. Encryption is tied to your wallet keys, so it works independently of any server.',
        },
        {
          q: 'What if my account gets hacked? Can my messages be compromised?',
          a: 'Because your messages are end-to-end encrypted, their content cannot be accessed without your encryption keys. Your keys are derived from your wallet private key and exist only on your device — never stored on any server. A server breach therefore cannot expose your messages. However, if your device or private key is compromised, messages could be at risk, so we recommend keeping your device and private key secure.',
        },
        {
          q: 'If I delete the app, will I lose my messages?',
          a: 'No. Your messages are stored on the decentralized XMTP network, so they persist even if you delete the app. Reinstall and sign back in with the same account to access your full message history.',
        },
        {
          q: 'Can I use the app on multiple devices?',
          a: 'Yes, you can access the same account from up to 10 different devices. When signing in on a new device, you may be prompted to approve it from one of your existing devices for security verification.',
        },
        {
          q: 'How do I manage notifications?',
          a: 'Go to Settings → Notifications to individually enable or disable new message, transfer, and system notifications.',
        },
        {
          q: 'Which networks and tokens are supported?',
          a: 'Currently, only the Base network is supported. Tokens on Base, including ETH and USDT, can be transferred. Support for additional networks and tokens will be added over time.',
        },
        {
          q: 'How do I transfer crypto?',
          a: 'Tap the "Send" button in a chat, enter the amount, and confirm. A small network fee (gas fee) applies — similar to a wire transfer or bank transaction fee, it goes to the computers running the network, not to DeChat. Because DeChat uses the Base network, this fee is typically just a few cents.',
        },
        {
          q: 'Will I be charged any fees?',
          a: 'Messaging is completely free. When sending crypto, you only pay a network transaction fee (gas) — this goes to the blockchain network, not to DeChat. The only time DeChat charges a small platform commission is on Swap transactions.',
          links: { Swap: '#q14' },
        },
        {
          q: 'How does DeChat make money?',
          a: 'DeChat earns a small commission only on Swap transactions. Messaging and crypto transfers are completely free. If you want to pay with a token you don\'t currently hold, you can first do a Swap to convert to the token you need.',
          links: { Swap: '#q14' },
        },
        {
          q: 'What is a Swap?',
          a: 'A swap means exchanging one cryptocurrency for another — for example, converting your ETH to USDT. DeChat charges a small commission for facilitating this exchange.',
        },
        {
          q: "I have crypto in my external wallet but can't see it in the app. Why?",
          a: 'DeChat uses a Smart Contract Wallet (SCW) for a better user experience. Your standard wallet in apps like MetaMask (an EOA) and your SCW are different addresses, so assets do not appear automatically. To transfer them: Settings → Wallet → Import from EOA. You can also easily transfer back from SCW to EOA at any time from the same menu.',
          links: { SCW: '#q16' },
        },
        {
          q: 'What is an SCW?',
          a: 'SCW stands for Smart Contract Wallet — a wallet that runs on the blockchain and offers features beyond standard wallets, such as gas sponsorship, social recovery, and batch transactions. DeChat automatically creates an SCW for you when you sign in.',
        },
        {
          q: 'I set my username wrong. What should I do?',
          a: "Usernames are permanently written to the blockchain and cannot be changed. In decentralized systems, this is an intentional design decision — it ensures no one can take over or alter someone else's identity. To use a different username, create a new account with a different email or wallet.",
        },
        {
          q: 'What is decentralization?',
          a: 'Decentralization means a service is run by thousands of independent computers rather than a single company or server. No one can shut it down, censor it, or seize your data.',
        },
        {
          q: 'How is DeChat decentralized?',
          a: 'DeChat uses the XMTP protocol for messaging and the Base blockchain for transfers. Your messages are stored in an encrypted, distributed network — not on a central server. Your account belongs to your wallet key, not to an email provider or app store.',
        },
        {
          q: 'Is DeChat open source?',
          a: 'Not currently. However, the core technologies DeChat is built on — such as the XMTP protocol and the Base blockchain — are open source and auditable. Those who want to verify DeChat without seeing its source code can examine these infrastructure components.',
        },
      ],
    },
    contact: {
      pageTitle: 'Contact Us',
      subtitle: 'Reach out for questions, feedback, or partnerships.',
      emailLabel: 'Email',
      emailDesc: 'We reply as soon as possible.',
      email: 'info@dechat.tech',
      form: {
        name: 'Full Name',
        namePlaceholder: 'Enter your name',
        email: 'Email',
        emailPlaceholder: 'example@email.com',
        message: 'Message',
        messagePlaceholder: 'Write your message here...',
        submit: 'Send',
      },
    },
    footer: {
      tagline: 'Decentralized messaging platform',
      rights: '2026 DeChat',
      networkActive: 'Network Inactive (Soon!)',
      links: ['Features', 'How It Works', 'FAQ', 'Contact'],
    },
  },
};
