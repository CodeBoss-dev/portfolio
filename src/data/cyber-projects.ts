import type { CyberProject } from "@/types";

export const cyberProjects: CyberProject[] = [
  {
    id: "network-hardening",
    title: "When the Network Became the Weakest Link",
    narrative: `Security has a way of being invisible until it isn't. The network infrastructure in question had been running without major incident for years — which, paradoxically, was part of the problem. Confidence had led to complacency, and vulnerabilities had accumulated quietly in the background while everyone focused on feature delivery.

A systematic penetration testing campaign uncovered more than 40 critical vulnerabilities across the network infrastructure. These weren't theoretical risks — they were exploitable weaknesses in authentication protocols, misconfigured firewalls, unpatched services, and overlooked access points that had been quietly widening the attack surface.

But finding vulnerabilities is only half the work. The real value came from building systems that would prevent them from accumulating again. Automated threat detection and monitoring systems were implemented, cutting security incident response time by 65%. More importantly, a set of defense protocols was designed and deployed that fundamentally changed how the network handled unauthorized access attempts.

Over the following six months, unauthorized access attempts decreased by 78%. Not because attackers stopped trying, but because the network stopped giving them places to land.`,
    metrics: [
      { value: "40+", label: "Critical Vulnerabilities Found" },
      { value: "65%", label: "Faster Incident Response" },
      { value: "78%", label: "Fewer Unauthorized Attempts" },
    ],
    technicalDetails: {
      stack: [
        "Nmap",
        "Metasploit",
        "Wireshark",
        "Snort IDS",
        "Python Automation",
        "SIEM Integration",
      ],
      architecture:
        "Layered defense with automated continuous monitoring. Network segmentation, intrusion detection at every boundary, and centralized SIEM correlation for threat pattern recognition.",
      details: [
        "Systematic penetration testing across internal and external network surfaces",
        "Automated vulnerability scanning with prioritization based on exploitability and impact",
        "Custom Snort rules developed from observed attack patterns specific to the environment",
        "Real-time threat monitoring with automated alerting and initial response playbooks",
        "Network segmentation redesign isolating critical assets from general traffic",
        "Defense protocol documentation and team training for incident response procedures",
      ],
    },
  },
];
