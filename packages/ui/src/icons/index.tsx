import type { ComponentPropsWithRef } from "react";
import { AICoalesce } from "@/icons/aicoalesce";
import { AnonymousIcon } from "@/icons/anonymous";
import { AnthropicIcon } from "@/icons/anthropic";
import { ArrowDown } from "@/icons/arrow-down";
import { ArrowDownCircle } from "@/icons/arrow-down-circle";
import { ArrowLeft } from "@/icons/arrow-left";
import { ArrowLeftRight } from "@/icons/arrow-left-right";
import { ArrowRight } from "@/icons/arrow-right";
import { ArrowUpRight } from "@/icons/arrow-up-right";
import { AudioLines } from "@/icons/audio-lines";
import { BadgeCheck } from "@/icons/badge-check";
import { Blocks } from "@/icons/blocks";
import { BookOpen } from "@/icons/book-open";
import { Bot } from "@/icons/bot";
import { Briefcase } from "@/icons/briefcase";
import { BuildingComplex } from "@/icons/building-complex";
import { Camera } from "@/icons/camera";
import { Check } from "@/icons/check";
import { ChevronDown } from "@/icons/chevron-down";
import { ChevronLeft } from "@/icons/chevron-left";
import { ChevronRight } from "@/icons/chevron-right";
import { ChevronUp } from "@/icons/chevron-up";
import { Circle } from "@/icons/circle";
import { CircleAlert } from "@/icons/circle-alert";
import { CircleCheck } from "@/icons/circle-check";
import { CirclePlus } from "@/icons/circle-plus";
import { ClaudeIcon } from "@/icons/claude";
import { Clipboard } from "@/icons/clipboard";
import { Code } from "@/icons/code";
import { CohereIcon, CohereIconCurrentColor } from "@/icons/cohere";
import { Compass, CompassEnhanced } from "@/icons/compass";
import { Copy } from "@/icons/copy";
import { Cross2 } from "@/icons/cross2";
import { DeepSeek } from "@/icons/deepseek";
import { Download } from "@/icons/download";
import { DrisdellIcon } from "@/icons/drisdell";
import { Edit } from "@/icons/edit";
import { EditIcon } from "@/icons/edit-icon";
import { EllipsisHorizontal } from "@/icons/ellipsis-horizontal";
import { EmptyChatHistory } from "@/icons/empty-chat-history";
import { Expand } from "@/icons/expand";
import { ExternalLink } from "@/icons/external-link";
import { Eye } from "@/icons/eye";
import { EyeClosed } from "@/icons/eye-closed";
import { EyeOff } from "@/icons/eye-off";
import { FileText } from "@/icons/file-text";
import { FileUp } from "@/icons/file-up";
import { Folder } from "@/icons/folder";
import { GeminiIcon } from "@/icons/gemini";
import { Github } from "@/icons/github";
import { Globe } from "@/icons/globe";
import { GoogleIcon } from "@/icons/google";
import { GripVertical } from "@/icons/grip-vertical";
import { Handshake } from "@/icons/handshake";
import { Headphones } from "@/icons/headphones";
import { HeartHandshake } from "@/icons/heart-handshake";
import { History } from "@/icons/history";
import { ImageGen } from "@/icons/image-gen";
import { ImageIcon } from "@/icons/image-icon";
import { Info } from "@/icons/info";
import { Key } from "@/icons/key";
import { KeyRound } from "@/icons/key-round";
import { Kimi } from "@/icons/kimi";
import { Layers } from "@/icons/layers";
import { LinkedIn } from "@/icons/linkedin";
import { ListChecks } from "@/icons/list-checks";
import { Loader } from "@/icons/loader";
import { LoaderCircle } from "@/icons/loader-circle";
import { LoaderPinwheel } from "@/icons/loader-pinwheel";
import { LogOut } from "@/icons/log-out";
import { Mail } from "@/icons/mail";
import { Menu } from "@/icons/menu";
import { MessageCircleQuestion } from "@/icons/message-circle-question";
import { MessageSquare } from "@/icons/message-square";
import { MessageSquareQuote } from "@/icons/message-square-quote";
import { MessageSquareText } from "@/icons/message-square-text";
import { MetaIcon } from "@/icons/meta";
import { Mic } from "@/icons/mic";
import { MinimaxIcon } from "@/icons/minimax";
import { MistralIcon } from "@/icons/mistral";
import { Moon } from "@/icons/moon";
import { Network } from "@/icons/network";
import { OpenAiIcon } from "@/icons/openai";
import { Package } from "@/icons/package";
import { Palette } from "@/icons/palette";
import { PanelLeft } from "@/icons/panel-left";
import { PanelLeftClose } from "@/icons/panel-left-close";
import { PanelLeftOpen } from "@/icons/panel-left-open";
import { PanelRightClose } from "@/icons/panel-right-close";
import { Paperclip } from "@/icons/paperclip";
import { Pause } from "@/icons/pause";
import { PenLine } from "@/icons/pen-line";
import { Play } from "@/icons/play";
import { Plus } from "@/icons/plus";
import { QuestionMark } from "@/icons/question-mark";
import { QuoteIcon } from "@/icons/quote";
import { QwenIcon } from "@/icons/qwen";
import { ReadAloud } from "@/icons/read-aloud";
import { RetryIcon } from "@/icons/retry";
import { RouteIcon } from "@/icons/route";
import { SakanaIcon } from "@/icons/sakana";
import { Save } from "@/icons/save";
import { Search } from "@/icons/search";
import { SearchX } from "@/icons/search-x";
import { Send } from "@/icons/send";
import { SendMessage } from "@/icons/send-message";
import { Settings } from "@/icons/settings";
import { SettingsUser } from "@/icons/settings-user";
import { ShareIcon } from "@/icons/share-icon";
import { ShieldCheck } from "@/icons/shield-check";
import { SlidersHorizontal } from "@/icons/sliders-horizontal";
import { Sparkles } from "@/icons/sparkles";
import { SquarePen } from "@/icons/square-pen";
import { Stop } from "@/icons/stop";
import { Sun } from "@/icons/sun";
import { Target } from "@/icons/target";
import { Terminal } from "@/icons/terminal";
import { ThumbsDown } from "@/icons/thumbs-down";
import { ThumbsUp } from "@/icons/thumbs-up";
import { Tools } from "@/icons/tools";
import { Trash } from "@/icons/trash";
import { TrashSimple } from "@/icons/trash-simple";
import { TriangleAlert } from "@/icons/triangle-alert";
import { Upload } from "@/icons/upload";
import { User } from "@/icons/user";
import { UsersRound } from "@/icons/users-round";
import { VercelIcon } from "@/icons/vercel";
import { Voice } from "@/icons/voice";
import { Volume } from "@/icons/volume";
import { VolumeMuted } from "@/icons/volume-muted";
import { X } from "@/icons/x";
import { XAiIcon } from "@/icons/xai";
import { Zai } from "@/icons/zai";
import { Zap } from "@/icons/zap";

const IconComponents = {
  AICoalesce,
  AnonymousIcon,
  AnthropicIcon,
  ArrowDown,
  ArrowDownCircle,
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BadgeCheck,
  Blocks,
  BookOpen,
  Bot,
  Briefcase,
  BuildingComplex,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  CirclePlus,
  Circle,
  ClaudeIcon,
  Clipboard,
  Code,
  CohereIcon,
  CohereIconCurrentColor,
  Compass,
  CompassEnhanced,
  Copy,
  Cross2,
  DeepSeek,
  Download,
  DrisdellIcon,
  Edit,
  EditIcon,
  EllipsisHorizontal,
  EmptyChatHistory,
  Expand,
  ExternalLink,
  Eye,
  EyeClosed,
  EyeOff,
  FileText,
  FileUp,
  Folder,
  GeminiIcon,
  Github,
  Globe,
  GoogleIcon,
  GripVertical,
  Handshake,
  Headphones,
  HeartHandshake,
  History,
  ImageGen,
  ImageIcon,
  Info,
  Key,
  KeyRound,
  Kimi,
  Layers,
  LinkedIn,
  ListChecks,
  LoaderCircle,
  LoaderPinwheel,
  Loader,
  LogOut,
  Mail,
  Menu,
  MessageCircleQuestion,
  MessageSquare,
  MessageSquareQuote,
  MessageSquareText,
  MetaIcon,
  Mic,
  MinimaxIcon,
  MistralIcon,
  Moon,
  Network,
  OpenAiIcon,
  Package,
  Palette,
  PanelLeft,
  PanelLeftOpen,
  PanelLeftClose,
  PanelRightClose,
  Paperclip,
  Pause,
  PenLine,
  Play,
  Plus,
  QuestionMark,
  QuoteIcon,
  QwenIcon,
  ReadAloud,
  RetryIcon,
  RouteIcon,
  SakanaIcon,
  Save,
  Search,
  SearchX,
  Send,
  SendMessage,
  Settings,
  SettingsUser,
  ShareIcon,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SquarePen,
  Stop,
  Sun,
  Target,
  Terminal,
  ThumbsDown,
  ThumbsUp,
  Tools,
  Trash,
  TrashSimple,
  TriangleAlert,
  Upload,
  User,
  UsersRound,
  VercelIcon,
  Voice,
  Volume,
  VolumeMuted,
  X,
  XAiIcon,
  Zai,
  Zap
} as const;

export type IconName = keyof typeof IconComponents;

export type BaseSVGProps = Omit<
  ComponentPropsWithRef<"svg">,
  "viewBox" | "xmlns" | "fill" | "strokeLinecap" | "strokeLinejoin"
>;

export interface IconProps<T extends IconName> extends BaseSVGProps {
  target?: T;
}

function IconWithTarget({ target, ...props }: IconProps<IconName>) {
  if (!target) {
    return null;
  }

  const IconComponent = IconComponents[target];
  return <IconComponent {...props} />;
}

export const Icon = Object.assign(
  // allows for target="icon name"
  IconWithTarget,
  // allows for keying into icon name directly
  IconComponents
);

export {
  AICoalesce,
  AnonymousIcon,
  AnthropicIcon,
  ArrowDown,
  ArrowDownCircle,
  ArrowLeft,
  ArrowLeftRight,
  ArrowRight,
  ArrowUpRight,
  AudioLines,
  BadgeCheck,
  Blocks,
  BookOpen,
  Bot,
  Briefcase,
  BuildingComplex,
  Camera,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  CircleAlert,
  CircleCheck,
  CirclePlus,
  Circle,
  ClaudeIcon,
  Clipboard,
  Code,
  CohereIcon,
  CohereIconCurrentColor,
  Compass,
  CompassEnhanced,
  Copy,
  Cross2,
  DeepSeek,
  Download,
  DrisdellIcon,
  Edit,
  EditIcon,
  EllipsisHorizontal,
  EmptyChatHistory,
  Expand,
  ExternalLink,
  Eye,
  EyeClosed,
  EyeOff,
  FileText,
  FileUp,
  Folder,
  GeminiIcon,
  Github,
  Globe,
  GoogleIcon,
  GripVertical,
  Handshake,
  Headphones,
  HeartHandshake,
  History,
  ImageGen,
  ImageIcon,
  Info,
  Key,
  KeyRound,
  Kimi,
  Layers,
  LinkedIn,
  ListChecks,
  LoaderCircle,
  LoaderPinwheel,
  Loader,
  LogOut,
  Mail,
  Menu,
  MessageCircleQuestion,
  MessageSquare,
  MessageSquareQuote,
  MessageSquareText,
  MetaIcon,
  Mic,
  MinimaxIcon,
  MistralIcon,
  Moon,
  Network,
  OpenAiIcon,
  Package,
  Palette,
  PanelLeft,
  PanelLeftOpen,
  PanelLeftClose,
  PanelRightClose,
  Paperclip,
  Pause,
  PenLine,
  Play,
  Plus,
  QuestionMark,
  QuoteIcon,
  QwenIcon,
  ReadAloud,
  RetryIcon,
  RouteIcon,
  SakanaIcon,
  Save,
  Search,
  SearchX,
  Send,
  SendMessage,
  Settings,
  SettingsUser,
  ShareIcon,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  SquarePen,
  Stop,
  Sun,
  Target,
  Terminal,
  ThumbsDown,
  ThumbsUp,
  Tools,
  Trash,
  TrashSimple,
  TriangleAlert,
  Upload,
  User,
  UsersRound,
  VercelIcon,
  Voice,
  Volume,
  VolumeMuted,
  X,
  XAiIcon,
  Zai,
  Zap
};
