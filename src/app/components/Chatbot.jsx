"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  Stethoscope,
  ExternalLink,
} from "lucide-react";

import { getBotReply, quickQuestions } from "@/lib/chatbotData";

const initialMessages = {
  en: {
    id: "welcome",
    role: "assistant",
    text: "Hello! 👋 Welcome to MediCare Connect. I can help you find doctors, understand appointments, and navigate our website. What would you like help with?",
    href: null,
    linkText: null,
  },
  bn: {
    id: "welcome",
    role: "assistant",
    text: "হ্যালো! 👋 MediCare Connect-এ স্বাগতম। আমি আপনাকে ডাক্তার খুঁজতে, অ্যাপয়েন্টমেন্ট সম্পর্কে জানতে এবং আমাদের ওয়েবসাইট ব্যবহার করতে সাহায্য করতে পারি। কীভাবে সাহায্য করতে পারি?",
    href: null,
    linkText: null,
  },
};

const panelVariants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.16,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: 8,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

const messageVariants = {
  hidden: {
    opacity: 0,
    y: 12,
    scale: 0.97,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 380,
      damping: 26,
    },
  },
};

const quickQuestionVariants = {
  hidden: {
    opacity: 0,
    y: 8,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 24,
    },
  },
};

function createMessageId() {
  return crypto.randomUUID();
}

function getCurrentTime() {
  return format(new Date(), "hh:mm a");
}

const translations = {
  en: {
    title: "MediCare Assistant",
    subtitle: "Your healthcare website guide",
    placeholder: "Ask me anything...",
    waiting: "Please wait...",
    send: "Send message",
    newChat: "Start a new chat",
    close: "Close chat",
    quickQuestions: "Quick questions",
    thinking: "MediCare Assistant is thinking",
    disclaimer:
      "This assistant provides website guidance, not medical diagnosis or treatment advice.",
    floatingTitle: "MediCare AI",
    floatingSubtitle: "Your AI Health Assistant",
    openChat: "Open MediCare AI chatbot",
    openPage: "Open page",
  },
  bn: {
    title: "মেডিকেয়ার সহকারী",
    subtitle: "আপনার স্বাস্থ্যসেবা ওয়েবসাইট গাইড",
    placeholder: "আপনার প্রশ্ন লিখুন...",
    waiting: "একটু অপেক্ষা করুন...",
    send: "মেসেজ পাঠান",
    newChat: "নতুন চ্যাট শুরু করুন",
    close: "চ্যাট বন্ধ করুন",
    quickQuestions: "সাধারণ কিছু প্রশ্ন",
    thinking: "মেডিকেয়ার সহকারী উত্তর তৈরি করছে",
    disclaimer:
      "এই সহকারী ওয়েবসাইট ব্যবহারে সাহায্য করে; এটি চিকিৎসকের রোগ নির্ণয় বা চিকিৎসার পরামর্শের বিকল্প নয়।",
    floatingTitle: "মেডিকেয়ার AI",
    floatingSubtitle: "আপনার AI স্বাস্থ্য সহকারী",
    openChat: "মেডিকেয়ার AI চ্যাটবট খুলুন",
    openPage: "পেজ খুলুন",
  },
};

const quickQuestionTranslations = {
  "Find a doctor": "ডাক্তার খুঁজুন",
  "Heart specialist": "হৃদরোগ বিশেষজ্ঞ",
  "Eye doctor": "চক্ষু বিশেষজ্ঞ",
  Appointment: "অ্যাপয়েন্টমেন্ট",
  বাংলা: "বাংলা",
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("en");
  const [messages, setMessages] = useState([initialMessages.en]);
  const [lastQuestion, setLastQuestion] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const timeoutRef = useRef(null);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const t = translations[language];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messages, isThinking]);

  useEffect(() => {
    if (isOpen) {
      const focusTimeout = setTimeout(() => {
        inputRef.current?.focus();
      }, 250);

      return () => clearTimeout(focusTimeout);
    }
  }, [isOpen]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  function changeLanguage(nextLanguage) {
    setLanguage(nextLanguage);

    // Update the welcome message if the conversation has not started.
    setMessages((current) =>
      current.length === 1 && current[0].id === "welcome"
        ? [initialMessages[nextLanguage]]
        : current
    );
  }

  function sendMessage(value = input) {
    const question = value.trim();

    if (!question || isThinking) return;

    const userMessage = {
      id: createMessageId(),
      role: "user",
      text: question,
      time: getCurrentTime(),
    };

    setMessages((current) => [...current, userMessage]);
    setLastQuestion(question);
    setInput("");
    setIsThinking(true);

    const selectedLanguage = language;

    timeoutRef.current = setTimeout(() => {
      setMessages((current) => {
        const reply = getBotReply(
          question,
          current,
          selectedLanguage
        );

        const assistantMessage = {
          id: createMessageId(),
          role: "assistant",
          ...reply,
          time: getCurrentTime(),
        };

        return [...current, assistantMessage];
      });

      setIsThinking(false);
      timeoutRef.current = null;
    }, 2000);
  }

  function retryLastQuestion() {
    if (lastQuestion && !isThinking) {
      sendMessage(lastQuestion);
    }
  }

  function resetChat() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    setMessages([initialMessages[language]]);
    setInput("");
    setLastQuestion("");
    setIsThinking(false);
  }

  return (
    <div className="fixed inset-x-3 bottom-3 z-[100] font-sans sm:inset-x-auto sm:bottom-5 sm:right-5">
      {/* Animated chat window */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section key="medicare-chat-panel" id="medicare-chat-panel" role="dialog" aria-label="MediCare Connect chatbot" aria-describedby="medicare-chat-disclaimer" variants={panelVariants} initial="hidden" animate="visible" exit="exit" className="mb-3 flex h-[min(600px,calc(100dvh-88px))] w-full max-w-[400px] origin-bottom-right flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:mb-4 sm:h-[min(650px,calc(100dvh-112px))] sm:w-[min(400px,calc(100vw-40px))]"
          >
            {/* Header */}
            <motion.div
              variants={messageVariants}
              className="flex shrink-0 items-center justify-between gap-2 bg-sky-600 px-3 py-3 text-white sm:px-4 sm:py-4"
            >
              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <motion.div
                  whileHover={{ rotate: 8, scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 sm:h-11 sm:w-11"
                >
                  <Stethoscope size={22} />
                </motion.div>

                <div className="min-w-0">
                  <h2 className="truncate text-sm font-semibold sm:text-base">
                    {t.title}
                  </h2>

                  <p className="mt-0.5 text-[11px] text-sky-100 sm:text-xs">
                    {t.subtitle}
                  </p>
                </div>
              </div>

              {/* Language toggle */}
              <div
                className="flex shrink-0 items-center gap-0.5 rounded-lg bg-white/15 p-1"
                aria-label="Choose language"
              >
                <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  aria-pressed={language === "en"}
                  className={`rounded-md px-2 py-1.5 text-xs font-semibold transition ${
                    language === "en"
                      ? "bg-white text-sky-700 shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage("bn")}
                  aria-pressed={language === "bn"}
                  className={`rounded-md px-2 py-1.5 text-xs font-semibold transition ${
                    language === "bn"
                      ? "bg-white text-sky-700 shadow-sm"
                      : "text-white hover:bg-white/10"
                  }`}
                >
                  BN
                </button>
              </div>

              {/* Header actions */}
              <div className="flex shrink-0 items-center gap-0.5">
                <motion.button
                  type="button"
                  onClick={resetChat}
                  title={t.newChat}
                  aria-label={t.newChat}
                  whileHover={{ rotate: -35, scale: 1.1 }}
                  whileTap={{ scale: 0.88 }}
                  className="rounded-full p-2 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <RotateCcw size={17} />
                </motion.button>

                <motion.button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title={t.close}
                  aria-label={t.close}
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  whileTap={{ scale: 0.88 }}
                  className="rounded-full p-2 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <X size={20} />
                </motion.button>
              </div>
            </motion.div>

            {/* Conversation */}
            <div
              className="min-h-0 flex-1 space-y-4 overflow-x-hidden overflow-y-auto overscroll-contain bg-slate-50 p-3 sm:p-4"
              aria-live="polite"
              aria-busy={isThinking}
            >
              {/* Messages */}
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    layout
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{
                      opacity: 0,
                      scale: 0.96,
                      transition: { duration: 0.12 },
                    }}
                    className={`flex items-start gap-2 ${
                      message.role === "user"
                        ? "flex-row-reverse"
                        : "flex-row"
                    }`}
                  >
                    {/* Avatar */}
                    <motion.div
                      whileHover={{ scale: 1.08 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        message.role === "user"
                          ? "bg-sky-600 text-white"
                          : "bg-sky-100 text-sky-700"
                      }`}
                    >
                      {message.role === "user" ? (
                        <User size={16} />
                      ) : (
                        <Bot size={17} />
                      )}
                    </motion.div>

                    {/* Message bubble */}
                    <motion.div
                      whileHover={{ y: -1 }}
                      className={`min-w-0 max-w-[85%] break-words rounded-2xl px-3 py-2.5 text-[13px] leading-6 sm:px-3.5 sm:py-3 sm:text-sm ${
                        message.role === "user"
                          ? "rounded-tr-sm bg-sky-600 text-white"
                          : "rounded-tl-sm border border-slate-200 bg-white text-slate-700"
                      }`}
                    >
                      <p className="whitespace-pre-wrap break-words">
                        {message.text}
                      </p>

                      {message.href && (
                        <Link
                          href={message.href}
                          onClick={() => setIsOpen(false)}
                          className="mt-3 inline-flex max-w-full items-center gap-1.5 rounded-lg bg-sky-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                          <span className="break-words">
                            {message.linkText || t.openPage}
                          </span>
                          <ExternalLink
                            size={13}
                            className="shrink-0"
                          />
                        </Link>
                      )}

                      {message.time && (
                        <p
                          className={`mt-1 text-[10px] ${
                            message.role === "user"
                              ? "text-sky-100"
                              : "text-slate-400"
                          }`}
                        >
                          {message.time}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing indicator */}
              <AnimatePresence>
                {isThinking && (
                  <motion.div
                    key="typing-indicator"
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit={{ opacity: 0, y: -5 }}
                    className="flex items-start gap-2"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-700">
                      <Bot size={17} />
                    </div>

                    <div className="min-w-0 rounded-2xl rounded-tl-sm border border-slate-200 bg-white px-3 py-3 sm:px-3.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs text-slate-500">
                          {t.thinking}
                        </span>

                        <span className="flex items-center gap-1">
                          {[0, 1, 2].map((dot) => (
                            <motion.span
                              key={dot}
                              className="h-1.5 w-1.5 rounded-full bg-sky-500"
                              animate={{
                                y: [0, -5, 0],
                                opacity: [0.45, 1, 0.45],
                              }}
                              transition={{
                                duration: 0.65,
                                repeat: Infinity,
                                delay: dot * 0.15,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Quick questions */}
              <AnimatePresence>
                {messages.length === 1 && !isThinking && (
                  <motion.div
                    key="quick-questions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.25 }}
                    className="pt-2"
                  >
                    <p className="mb-2 text-xs font-medium text-slate-500">
                      {t.quickQuestions}
                    </p>

                    <motion.div
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.06,
                          },
                        },
                      }}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-wrap gap-2"
                    >
                      {quickQuestions.map((question) => (
                        <motion.button
                          key={question.label}
                          type="button"
                          disabled={isThinking}
                          variants={quickQuestionVariants}
                          whileHover={{
                            y: -2,
                            scale: 1.025,
                            transition: { duration: 0.15 },
                          }}
                          whileTap={{ scale: 0.96 }}
                          onClick={() =>
                            sendMessage(question.message)
                          }
                          className="max-w-full rounded-full border border-sky-200 bg-white px-3 py-2 text-left text-xs font-medium text-sky-700 transition-colors hover:border-sky-400 hover:bg-sky-50 disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                          {language === "bn"
                            ? quickQuestionTranslations[
                                question.label
                              ] || question.label
                            : question.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div ref={messagesEndRef} />
            </div>

            {/* Medical disclaimer */}
            <motion.div
              variants={messageVariants}
              id="medicare-chat-disclaimer"
              className="shrink-0 border-t border-slate-100 bg-white px-3 py-2 sm:px-4"
            >
              <p className="text-[10px] leading-4 text-slate-500">
                {t.disclaimer}
              </p>
            </motion.div>

            {/* Message input */}
            <motion.form
              onSubmit={(event) => {
                event.preventDefault();
                sendMessage();
              }}
              className="flex shrink-0 items-center gap-2 border-t border-slate-200 bg-white p-2.5 sm:p-3"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={
                  isThinking ? t.waiting : t.placeholder
                }
                aria-label={t.placeholder}
                maxLength={500}
                disabled={isThinking}
                className="h-11 min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-100 disabled:cursor-wait disabled:opacity-70 sm:px-3.5"
              />

              <motion.button
                type="submit"
                disabled={!input.trim() || isThinking}
                aria-label={t.send}
                title={t.send}
                whileHover={
                  input.trim() && !isThinking
                    ? { scale: 1.06, y: -1 }
                    : undefined
                }
                whileTap={
                  input.trim() && !isThinking
                    ? { scale: 0.9 }
                    : undefined
                }
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2"
              >
                <motion.span
                  animate={
                    input.trim() && !isThinking
                      ? { x: [0, 2, 0] }
                      : { x: 0 }
                  }
                  transition={{
                    duration: 0.8,
                    repeat:
                      input.trim() && !isThinking ? Infinity : 0,
                    repeatDelay: 1.5,
                  }}
                  className="flex items-center justify-center"
                >
                  <Send size={17} />
                </motion.span>
              </motion.button>
            </motion.form>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Floating chat button and label */}
      <div className="flex justify-end">
        <div className="flex max-w-full items-center gap-2 sm:gap-3">
          {/* Floating label */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                key="chatbot-label"
                initial={{
                  opacity: 0,
                  x: 18,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  x: 12,
                  scale: 0.9,
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 25,
                }}
                className="max-w-[calc(100vw-100px)] rounded-2xl border border-sky-100 bg-white px-3 py-2 shadow-lg shadow-sky-900/5 sm:px-4 sm:py-2.5"
              >
                <p className="text-xs font-semibold text-slate-800 sm:text-sm">
                  {t.floatingTitle}
                </p>
                <p className="text-[10px] text-slate-500 sm:text-xs">
                  {t.floatingSubtitle}
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating button */}
          <motion.button
            type="button"
            onClick={() =>
              setIsOpen((current) => !current)
            }
            aria-label={isOpen ? t.close : t.openChat}
            aria-expanded={isOpen}
            aria-controls="medicare-chat-panel"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 17,
            }}
            className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-600/25 transition-colors duration-200 hover:bg-sky-700 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-200"
          >
            {/* Pulsing ring */}
            {!isOpen && (
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-full border border-sky-400"
                animate={{
                  scale: [1, 1.45, 1.45],
                  opacity: [0.55, 0, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}

            {/* Icon transition */}
            <AnimatePresence
              mode="wait"
              initial={false}
            >
              <motion.span
                key={isOpen ? "close-icon" : "chat-icon"}
                initial={{
                  opacity: 0,
                  rotate: -75,
                  scale: 0.5,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 75,
                  scale: 0.5,
                }}
                transition={{ duration: 0.18 }}
                className="relative z-10 flex items-center justify-center"
              >
                {isOpen ? (
                  <X size={25} />
                ) : (
                  <MessageCircle size={26} />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </div>
  );
}
