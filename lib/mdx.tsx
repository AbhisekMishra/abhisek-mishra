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
};

export const mdxOptions: MDXRemoteProps["options"] = {
  mdxOptions: {
    rehypePlugins: [[rehypeHighlight, { ignoreMissing: true }]],
  },
};
