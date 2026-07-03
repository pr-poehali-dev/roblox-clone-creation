import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const NAV = [
  { id: 'home', label: 'Главная', icon: 'Home' },
  { id: 'games', label: 'Каталог', icon: 'Gamepad2' },
  { id: 'studio', label: 'Мастерская', icon: 'Hammer' },
  { id: 'friends', label: 'Друзья', icon: 'Users' },
  { id: 'shop', label: 'Магазин', icon: 'ShoppingBag' },
  { id: 'profile', label: 'Профиль', icon: 'User' },
  { id: 'help', label: 'Помощь', icon: 'LifeBuoy' },
];

const GAMES = [
  { title: 'Voxel Islands', genre: 'Приключения', online: 148230, rating: 4.9, img: 'https://cdn.poehali.dev/projects/ed83c722-e990-4293-900a-1ee3e74a2b5c/bucket/c4526865-0892-434b-8096-81e4cfb838aa.jpg', hot: true },
  { title: 'Neon Racers', genre: 'Гонки', online: 92640, rating: 4.7, img: 'https://cdn.poehali.dev/projects/ed83c722-e990-4293-900a-1ee3e74a2b5c/bucket/c4526865-0892-434b-8096-81e4cfb838aa.jpg', hot: true },
  { title: 'Pirate Royale', genre: 'Битва', online: 210500, rating: 4.8, img: 'https://cdn.poehali.dev/projects/ed83c722-e990-4293-900a-1ee3e74a2b5c/bucket/c4526865-0892-434b-8096-81e4cfb838aa.jpg', hot: true },
  { title: 'Voxel Islands 2', genre: 'Симулятор', online: 45120, rating: 4.6, img: 'https://cdn.poehali.dev/projects/ed83c722-e990-4293-900a-1ee3e74a2b5c/bucket/c4526865-0892-434b-8096-81e4cfb838aa.jpg', hot: false },
  { title: 'Turbo Drift', genre: 'Гонки', online: 33890, rating: 4.5, img: 'https://cdn.poehali.dev/projects/ed83c722-e990-4293-900a-1ee3e74a2b5c/bucket/c4526865-0892-434b-8096-81e4cfb838aa.jpg', hot: false },
  { title: 'Treasure Wars', genre: 'Битва', online: 78400, rating: 4.9, img: 'https://cdn.poehali.dev/projects/ed83c722-e990-4293-900a-1ee3e74a2b5c/bucket/c4526865-0892-434b-8096-81e4cfb838aa.jpg', hot: false },
];

const CATS = ['Все', 'Приключения', 'Гонки', 'Битва', 'Симулятор', 'Ролевые'];

const SHOP = [
  { name: '80 Робаксов', price: '99 ₽', icon: 'Gem', accent: 'from-cyan-400 to-blue-500' },
  { name: '400 Робаксов', price: '449 ₽', icon: 'Gem', accent: 'from-fuchsia-400 to-purple-600', best: true },
  { name: '1000 Робаксов', price: '999 ₽', icon: 'Crown', accent: 'from-amber-300 to-orange-500' },
  { name: 'Premium подписка', price: '299 ₽/мес', icon: 'Sparkles', accent: 'from-pink-400 to-rose-600' },
];

const fmt = (n: number) => n.toLocaleString('ru-RU');

export default function Index() {
  const [active, setActive] = useState('home');
  const [cat, setCat] = useState('Все');

  const games = cat === 'Все' ? GAMES : GAMES.filter((g) => g.genre === cat);

  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="sticky top-0 z-50 glass">
        <div className="container flex items-center gap-4 py-3">
          <div className="flex items-center gap-2 mr-2">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent animate-glow">
              <Icon name="Blocks" size={22} className="text-white" />
            </div>
            <span className="font-display text-2xl font-bold tracking-wider text-gradient">FASTAKRA</span>
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => setActive(n.id)}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active === n.id ? 'bg-primary/20 text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={n.icon} size={16} />
                {n.label}
              </button>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5">
              <Icon name="Gem" size={16} className="text-secondary" />
              <span className="text-sm font-semibold">2 450</span>
            </div>
            <Button className="rounded-xl bg-gradient-to-r from-primary to-accent font-semibold hover:opacity-90">
              Играть
            </Button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="container py-12 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="animate-fade-in">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-4 py-1.5 text-sm text-secondary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              1 249 872 игроков онлайн прямо сейчас
            </div>
            <h1 className="font-display text-5xl font-bold leading-none tracking-tight md:text-7xl">
              ИГРАЙ. <span className="text-gradient">СОЗДАВАЙ.</span> ПОБЕЖДАЙ.
            </h1>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Миллионы игр с мультиплеером в реальном времени. Собирай друзей, строй собственные миры и зарабатывай робаксы.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-xl bg-gradient-to-r from-primary to-accent text-base font-semibold hover-scale">
                <Icon name="Play" size={18} className="mr-1" />
                Начать играть
              </Button>
              <Button size="lg" variant="outline" className="rounded-xl border-secondary/50 text-base font-semibold hover:bg-secondary/10">
                <Icon name="Hammer" size={18} className="mr-1" />
                Создать игру
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              {[['50M+', 'Игр'], ['1.2M', 'Онлайн'], ['4.9★', 'Рейтинг']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-gradient">{v}</div>
                  <div className="text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-primary/30 to-accent/30 blur-2xl" />
            <img
              src={GAMES[2].img}
              alt="hero"
              className="relative w-full rounded-[2rem] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="games" className="container py-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Каталог игр</h2>
          <button className="flex items-center gap-1 text-sm text-secondary hover:underline">
            Все игры <Icon name="ArrowRight" size={16} />
          </button>
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                cat === c
                  ? 'bg-gradient-to-r from-primary to-accent text-white'
                  : 'bg-muted text-muted-foreground hover:text-foreground'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((g, i) => (
            <div
              key={g.title + i}
              className="group animate-fade-in overflow-hidden rounded-2xl border border-white/5 bg-card hover-scale"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={g.img} alt={g.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                {g.hot && (
                  <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-accent px-2.5 py-1 text-xs font-bold text-white">
                    <Icon name="Flame" size={12} /> HOT
                  </span>
                )}
                <span className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold backdrop-blur">
                  <Icon name="Star" size={12} className="text-amber-400" /> {g.rating}
                </span>
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-black/50 px-2.5 py-1 text-xs backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-green-400" />
                  {fmt(g.online)} играют
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <div>
                  <h3 className="font-display text-lg font-bold">{g.title}</h3>
                  <p className="text-sm text-muted-foreground">{g.genre}</p>
                </div>
                <Button size="sm" className="rounded-xl bg-primary/20 text-primary hover:bg-primary hover:text-white">
                  <Icon name="Play" size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MULTIPLAYER BANNER */}
      <section className="container py-14">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-primary/25 via-accent/20 to-secondary/25 p-8 md:p-12">
          <div className="relative z-10 grid items-center gap-6 md:grid-cols-2">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm">
                <Icon name="Wifi" size={14} className="text-secondary" /> Реальное время
              </div>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Играй с друзьями в мультиплеере</h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Создавай комнаты, приглашай друзей и сражайтесь в командах. Молниеносные серверы без задержек.
              </p>
              <Button size="lg" className="mt-6 rounded-xl bg-white font-semibold text-primary hover:bg-white/90">
                <Icon name="Users" size={18} className="mr-1" /> Создать комнату
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              {[['Zap', 'Пинг < 20мс'], ['Shield', 'Честная игра'], ['Globe', 'Сервера по миру'], ['MessageSquare', 'Голосовой чат']].map(([ic, t]) => (
                <div key={t} className="glass flex flex-1 items-center gap-3 rounded-2xl p-4">
                  <Icon name={ic} size={22} className="text-secondary" />
                  <span className="text-sm font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SHOP */}
      <section id="shop" className="container py-6">
        <div className="mb-8 text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Магазин робаксов</h2>
          <p className="mt-2 text-muted-foreground">Пополни баланс и открой новые возможности</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SHOP.map((s, i) => (
            <div
              key={s.name}
              className={`relative animate-fade-in rounded-2xl border p-6 text-center hover-scale ${
                s.best ? 'border-accent bg-accent/5' : 'border-white/5 bg-card'
              }`}
              style={{ animationDelay: `${i * 70}ms` }}
            >
              {s.best && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-xs font-bold text-white">
                  ХИТ ПРОДАЖ
                </span>
              )}
              <div className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${s.accent}`}>
                <Icon name={s.icon} size={28} className="text-white" />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{s.name}</h3>
              <div className="mt-1 text-2xl font-bold text-gradient">{s.price}</div>
              <Button className="mt-4 w-full rounded-xl bg-gradient-to-r from-primary to-accent font-semibold hover:opacity-90">
                Купить
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* AGE 18+ NOTICE */}
      <section className="container py-14">
        <div className="flex items-center gap-4 rounded-2xl border border-accent/40 bg-accent/10 p-5">
          <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent font-display text-xl font-bold text-white">
            18+
          </div>
          <div>
            <h3 className="font-semibold">Платформа для взрослой аудитории</h3>
            <p className="text-sm text-muted-foreground">
              Контент предназначен для пользователей старше 18 лет. Регистрируясь, вы подтверждаете свой возраст.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10">
        <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent">
              <Icon name="Blocks" size={18} className="text-white" />
            </div>
            <span className="font-display text-xl font-bold text-gradient">FASTAKRA</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            {['Каталог', 'Мастерская', 'Сообщества', 'Магазин', 'Поддержка', 'Правила'].map((l) => (
              <a key={l} href="#" className="hover:text-foreground">{l}</a>
            ))}
          </nav>
          <div className="flex gap-3">
            {['Send', 'Youtube', 'Twitch'].map((ic) => (
              <a key={ic} href="#" className="grid h-9 w-9 place-items-center rounded-lg bg-muted hover:bg-primary/20">
                <Icon name={ic} size={16} />
              </a>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">© 2026 FASTAKRA. Играй, создавай, побеждай.</p>
      </footer>
    </div>
  );
}