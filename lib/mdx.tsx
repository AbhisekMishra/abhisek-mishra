import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";
import Callout from "@/components/blog/Callout";
import {
  AgentLoopHero,
  AgentLoopFlow,
  CoatCheck,
  IdSwapExperiment,
  ApiCompare,
} from "@/components/blog/agent-loop-visuals";
import {
  GuardrailsHero,
  GuardrailPipeline,
  SoftVsHard,
  HistoryFilter,
  WindowCut,
  SummarizeFlow,
} from "@/components/blog/agent-guardrails-visuals";
import {
  ContextHero,
  OptionsMap,
  ToolResultTrim,
  CompactAt,
  ExternalMemory,
} from "@/components/blog/context-management-visuals";

export const mdxComponents = {
  Callout,
  AgentLoopHero,
  AgentLoopFlow,
  CoatCheck,
  IdSwapExperiment,
  ApiCompare,
  GuardrailsHero,
  GuardrailPipeline,
  SoftVsHard,
  HistoryFilter,
  WindowCut,
  SummarizeFlow,
  ContextHero,
  OptionsMap,
  ToolResultTrim,
  CompactAt,
  ExternalMemory,
};

export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [[rehypeHighlight, { ignoreMissing: true }]],
  },
};
